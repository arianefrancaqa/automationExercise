// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import 'cypress-plugin-api'
import './helpers/fake-data/generate-random-data'


const customCommandsContext = require.context('./customCommands', true, /\.js$/);

customCommandsContext.keys().forEach((key) => {
    const commandModule = customCommandsContext(key);
    Object.keys(commandModule).forEach((commandName) => {
        Cypress.Commands.add(commandName, commandModule[commandName]);
    });
});