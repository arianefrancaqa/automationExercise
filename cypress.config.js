const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'nzd4fh',
  e2e: {
    baseUrl: 'https://automationexercise.com/',
    env: {
      requestMode: true,
      apiUrl: 'https://automationexercise.com/api/',
      baseUrl: 'https://automationexercise.com/'
    },
    setupNodeEvents(on, config) {
      return config;
    }
  }
});
