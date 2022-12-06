<!-- Template taken from https://github.com/othneildrew/Best-README-Template/ -->

<a name="readme-top"></a>

<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://gitlab.com/kernpunkt/bega/bega-connect/app-connect-iot">
    <img src="docs/logo.svg" alt="Logo">
  </a>

<h3 align="center">BEGA Connect IoT App</h3>

  <p align="center">
    This repository holds the code of the BEGA Connect IoT App.
    <br />
    <a href="#"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://connect-app-iot-prod.netlify.app/">View Live</a>
    ·
    <a href="https://kernpunkt.atlassian.net/jira/software/c/projects/BCWA/boards/22">Report Bug</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li>
      <a href="#usage">Usage</a>
      <ul>
        <li><a href="#i18n">i18n</a></li>
        <li><a href="#cli-commands">CLI Commands</a></li>
        <li><a href="#authentication-and-authorization">Authentication & authorization</a></li>
      </ul>
    </li>
    <li><a href="#contributing">Contributing</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

[![Product Name Screen Shot][product-screenshot]](https://connect-app-iot-prod.netlify.app/)

Right now it's just a boilerplate for the BEGA Connect IoT App. With all necessary dependencies and libraries installed.
More to come soon. 🤞

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

[![Nuxt][nuxt.com]][nuxt-url]
[![Vue][vue.js]][vue-url]
[![Tailwind][tailwindcss.com]][tailwind-url]
[![TypeScript][typescriptlang.org]][typescript-url]
[![ESLint][eslint.org]][eslint-url]
[![Prettier][prettier.io]][prettier-url]
[![Commitlint][commitlint.js]][commitlint-url]
[![Changelogen][changelogen]][changelogen-url]
[![Husky][husky]][husky-url]
[![Vite][vitejs.dev]][vite-url]
[![Vitest][vitest.dev]][vitest-url]
[![Cy][cypress.io]][cypress-url]
[![Netlify][netlify.com]][netlify-url]
[![Pinia][pinia]][pinia-url]
[![Gitlab][gitlab.com]][gitlab-url]
[![Testing Library][testing-library.com]][testing-library-url]
[![nuxt-auth][nuxt-auth-badge]][nuxt-auth-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

### Prerequisites

This project requires the following tools to be installed:

- [Node.js +v18](https://nodejs.org/en/) (best to be installed via nvm or n)
- [nvm](https://github.com/nvm-sh/nvm) or [n](https://github.com/tj/n) (both optional but a big help for managing node versions))
- npm

  ```sh
  npm install npm@latest -g
  ```

- [pnpm](https://pnpm.io/)

  ```sh
  npm install -g pnpm
  ```

### Installation

1. Clone the repo
   ```sh
   git clone https://gitlab.com/kernpunkt/bega/bega-connect/app-connect-iot
   ```
2. Install NPM packages via pnpm
   ```sh
   pnpm install
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Testing
In order to be able to mock the i18n module and its global methods like $t, we have to write our own render() function to overwrite the default of @testing-library/vue.
This is done in tests/setup.ts and should be imported as follows:  
```
// old
import { render } from '@testing-library/vue'

// new
import { render} from 'test/setup'
```

<!-- USAGE EXAMPLES -->

## Usage

### i18n

We are using the next version of the [i18n module](https://v8.i18n.nuxtjs.org/getting-started/setup), which is still in beta, but it's stable enough to be used in production.
All language json-files are located in the `i18n` folder and are named after the language code. The default language is `de`.

To use the key/value pairs in the template, you can use the `$t` function. For example:

```html
<h1>{{ $t('welcome') }}</h1>
```

### CLI Commands

Usefule commands to run various tasks needed during development:

- `pnpm dev` - run the app in development mode
- `pnpm build` - build the app for production
- `pnpm generate` - generate static pages for production
- `pnpm start` - start the app in production mode
- `pnpm postinstall` - generate types and tsconfig
- `pnpm lint` - run the linter
- `pnpm lint:fix` - run the linter and fix errors
- `pnpm prepare` - install husky hooks
- `pnpm changelog` - generate changelog and bump version in package.json
- `pnpm test` - run the tests
- `pnpm test:watch` - run the tests in watch mode
- `pnpm test:coverage` - run the tests and generate a coverage report
- `pnpm test:e2e` - run the end-to-end tests


### Authentication and authorization
We use [nuxt-auth](https://github.com/sidebase/nuxt-auth) for authentication and authorization. nuxt-auth uses next-auth under the hood. Learn more about [next-auth](https://next-auth.js.org).


_For more examples, explanations and guidelines please refer to the [Documentation](#)_

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTING -->

## Contributing

If you have to implement a new feature-request or fix some bugs, please clone the repo and create a merge request.

1. Clone the Project
2. Create your Feature Branch (`git checkout -b feature/BCAW-IssueNumber`)
3. Commit your Changes (`git commit -m 'feat: implement new feature'`)  
   3.1. Please use the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) format for your commit messages. [More info here](#)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Merge Request
6. Wait for review
7. Merge

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[product-screenshot]: docs/screenshot.png

<!-- dependencies -->

[changelogen]: https://img.shields.io/badge/changelogen-yellow?style=for-the-badge&logo=unjs&logoColor=white
[changelogen-url]: https://github.com/unjs/changelogen
[commitlint.js]: https://img.shields.io/badge/commitlint-green?style=for-the-badge&logo=commitlint&logoColor=white
[commitlint-url]: https://github.com/conventional-changelog/commitlint
[cypress.io]: https://img.shields.io/badge/cypress-blue?style=for-the-badge&logo=cypress&logoColor=white
[cypress-url]: https://cypress.io
[eslint.org]: https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white
[eslint-url]: https://eslint.org/
[gitlab.com]: https://img.shields.io/badge/gitlab-FC6D27?style=for-the-badge&logo=gitlab&logoColor=white
[gitlab-url]: https://gitlab.com/kernpunkt/bega/bega-connect/app-connect-iot
[husky]: https://img.shields.io/badge/husky-4B3263?style=for-the-badge&logo=husky&logoColor=white
[husky-url]: https://typicode.github.io/husky/#/
[netlify.com]: https://img.shields.io/badge/netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white
[netlify-url]: https://netlify.com
[nuxt.com]: https://img.shields.io/badge/Nuxt-002E3B?style=for-the-badge&logo=nuxtdotjs&logoColor=#00DC82
[nuxt-auth-url]: https://github.com/sidebase/nuxt-auth
[nuxt-auth-badge]: https://img.shields.io/badge/nuxt--auth-4B3263?style=for-the-badge&logo=nuxt-dot-js&logoColor=white
[nuxt-url]: https://nuxt.com/
[pinia]: https://img.shields.io/badge/pinia-4B3263?style=for-the-badge&logo=pinia&logoColor=white
[pinia-url]: pinia.vuejs.org/
[prettier.io]: https://img.shields.io/badge/Prettier-F7B93E?style=for-the-badge&logo=prettier&logoColor=white
[prettier-url]: https://prettier.io/
[tailwindcss.com]: https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white
[tailwind-url]: https://tailwindcss.com
[testing-library.com]: https://img.shields.io/badge/testing--library-4B3263?style=for-the-badge&logo=testing-library&logoColor=white
[testing-library-url]: https://testing-library.com/
[typescriptlang.org]: https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white
[typescript-url]: https://typescriptlang.org
[vue.js]: https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D
[vue-url]: https://vuejs.org/
[vitejs.dev]: https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white
[vite-url]: https://vitejs.dev/
[vitest.dev]: https://img.shields.io/badge/Vitest-646CFF?style=for-the-badge&logo=vite&logoColor=white
[vitest-url]: https://vitest.dev/
