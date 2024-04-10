import { productsPage } from "../../page-objects/products";

Cypress.Commands.add('addProduct1ToCart', () => {
    cy.get(productsPage.productSelector('1'))
        .first()
        .click()
    cy.contains('u', 'View Cart', { timeout: 10000 })
        .first()
        .should('be.visible')
        .click()
});