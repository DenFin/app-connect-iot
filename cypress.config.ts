import path from 'path';
import { defineConfig } from 'cypress'
import createBundler from "@bahmutov/cypress-esbuild-preprocessor";
import { addCucumberPreprocessorPlugin } from "@badeball/cypress-cucumber-preprocessor";
import createEsbuildPlugin from "@badeball/cypress-cucumber-preprocessor/esbuild";
import dotenv from 'dotenv';
const envFilename = process.env.ENV_FILENAME || ''
dotenv.config({path: path.resolve(__dirname, `${envFilename}.env`)});

async function setupNodeEvents(
  on: Cypress.PluginEvents,
  config: Cypress.PluginConfigOptions
): Promise<Cypress.PluginConfigOptions> {
  config.env = {
    ...process.env,
    ...config.env
  }

  // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
  await addCucumberPreprocessorPlugin(on, config);

  on(
    "file:preprocessor",
    createBundler({
      plugins: [createEsbuildPlugin(config)],
    })
  );

  // Make sure to return the config object as it might have been modified by the plugin.
  return config;
}

export default defineConfig({
  experimentalWebKitSupport: true,
  e2e: {
    specPattern: 'cypress/e2e/**/*.feature',
    baseUrl: 'http://localhost:3000',
    chromeWebSecurity: false,
    viewportHeight: 1080,
    viewportWidth: 1920,
    supportFile: './cypress/support/index.ts',
    setupNodeEvents,
  },
})
