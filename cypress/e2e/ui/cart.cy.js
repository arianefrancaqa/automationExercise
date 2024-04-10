import { productsPage } from "../../support/page-objects/products";
import { cartPage } from "../../support/page-objects/cart";

describe(`Cart UI Tests`, () => {

    beforeEach(() => {
        cy.visit(productsPage.url)
    });
    it('#6 & #7 Should be able to Add a product to the cart and verify cart', () => {
        cy.addProduct1ToCart()
        cy.get(productsPage.product1)
            .should('be.visible')
    });

    it('#8 & #9 Should be able to Remove item from cart and verify empty cart', () => {
        cy.addProduct1ToCart()
        cy.get(cartPage.removeItemButton)
            .first()
            .click()
        cy.get(cartPage.emptyCardContainer)
            .should('exist')
        cy.contains('Cart is empty!')
            .should('be.visible')
    });

})