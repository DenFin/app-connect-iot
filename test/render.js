import { defineComponent } from 'vue'
import { mount, flushPromises } from '@vue/test-utils'
import { getQueriesForElement, prettyDOM } from '@testing-library/dom'

const mountedWrappers = new Set()

/**
 * This function is a fork from the origin render() function inside the VTL package
 * @link https://github.com/testing-library/vue-testing-library/blob/main/src/render.js
 *
 * We have to fork it to support async components / async setup hooks which needs to be wrapped in a
 * <suspense> tag.
 * @link https://vuejs.org/guide/built-ins/suspense.html#async-dependencies}
 *
 * If you use this asyncRender function don't forget to use the asyncCleanup as well otherwise the document will not be
 * cleared correctly
 */
async function render(
  Component,
  {
    store = null,
    routes = null,
    container: customContainer,
    baseElement: customBaseElement,
    ...mountOptions
  } = {},
) {
  const div = document.createElement('div')
  const baseElement = customBaseElement || customContainer || document.body
  const container = customContainer || baseElement.appendChild(div)

  if (store || routes) {
    console.warn(`Providing 'store' or 'routes' options is no longer available.
You need to create a router/vuex instance and provide it through 'global.plugins'.
Check out the test examples on GitHub for further details.`)
  }

  const wrapper = await mountWithSuspense(Component, {
    ...mountOptions,
    attachTo: container,
  })

  // this removes the additional wrapping div node from VTU:
  // https://github.com/vuejs/vue-test-utils-next/blob/master/src/mount.ts#L309
  unwrapNode(wrapper.parentElement)

  mountedWrappers.add(wrapper)

  return {
    container,
    baseElement,
    debug: (el = baseElement, maxLength, options) =>
      Array.isArray(el)
        ? el.forEach(e => console.log(prettyDOM(e, maxLength, options)))
        : console.log(prettyDOM(el, maxLength, options)),
    unmount: () => wrapper.unmount(),
    html: () => wrapper.html(),
    emitted: name => wrapper.emitted(name),
    rerender: props => wrapper.setProps(props),
    ...getQueriesForElement(baseElement),
  }
}

function unwrapNode(node) {
  node.replaceWith(...node.childNodes)
}

function cleanup() {
  mountedWrappers.forEach(cleanupAtWrapper)
}

function cleanupAtWrapper(wrapper) {
  if (
    wrapper.element.parentNode &&
    wrapper.element.parentNode.parentNode === document.body
  ) {
    document.body.removeChild(wrapper.element.parentNode)
  }

  wrapper.unmount()
  mountedWrappers.delete(wrapper)
}

/**
 * Wraps a component with a <suspense> and flush all promises
 * @link https://github.com/vuejs/test-utils/issues/108#issuecomment-1124851726
 */
async function mountWithSuspense(component, options) {
  const wrapper = defineComponent({
    'components': { [component.name]: component },
    'props': Object.keys(options.props ?? {}),
    'template': `
      <suspense>
      <${component.name} v-bind='$props' />
      </suspense>`,
  })

  const result = mount(wrapper, options)
  await flushPromises()
  return result
}

export { render as asyncRender, cleanup as asyncCleanup }
