# BEGA Connect

![Logo](./docs/logo.svg)

## Eslint

run following command to lint the code

```sh
pnpm lint
pnpm lint:fix // to fix the linting errors
```

- https://eslint.vuejs.org/
- https://github.com/nuxt/eslint-config#typescript
- https://github.com/francoismassart/eslint-plugin-tailwindcss
- https://github.com/prettier/eslint-config-prettier

## TypeScript

run following command to check the types

```sh
pnpm typecheck
```

-https://nuxt.com/docs/guide/concepts/typescript#typescript

## Tailwind

Tailwind config should be placed in `tailwind.config.js` file.

## Commitlint

Commitlint is used to lint the commit messages. It is configured to use the [conventional commit](https://www.conventionalcommits.org/en/v1.0.0/) format.

- https://github.com/conventional-changelog/commitlint

## husky

husky is used to run the linting and type checking before commiting the code.

- https://typicode.github.io/husky/#/

## changelogen

changelogen is used to generate the changelog file and bump the version.

run following command to generate the changelog file

```sh
pnpm changelog
```

- https://github.com/unjs/changelogen

## Testing

run following command to run the tests

```sh
pnpm test
```

- Use `testing-library/vue` for component testing
- Use `vitest` for unit testing
- Use `cypress` for e2e testing

- https://vuejs.org/guide/scaling-up/testing.html#why-test
