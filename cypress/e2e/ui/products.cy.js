import { navMenu } from "../../support/page-objects/navMenu";
import { productsPage } from "../../support/page-objects/products";

describe(`Products UI Test`, () => {

    beforeEach(() => {
        cy.visit('/')
    });

    it('#2 Should be able to go to Products', () => {
        cy.get(navMenu.productsButton)
            .click()
        cy.url().should('include', productsPage.url)
        cy.contains('h2', 'All Products')
            .should('be.visible')
    });

    it('#3 Should be able to Expand/Collapse category menu and check states', () => {
        cy.visit(productsPage.url)
        cy.get(productsPage.womanCategoryMenuOption)
            .click()
        cy.get(productsPage.isMenuCollapsed('in'))
            .should('exist')
        cy.get(productsPage.womanCategoryMenuOption)
            .click()
        cy.get(productsPage.isMenuCollapsed('collapse'))
            .should('exist')
    });

    it('#4 & #5 Should be able to Search for "jeans" and verify the results', () => {
        cy.visit(productsPage.url)
        cy.get(productsPage.searchBar)
            .type('jeans')
        cy.get(productsPage.submitSearchButton)
            .click()
        cy.contains(productsPage.title, 'Searched Products')
            .should('be.visible')
        cy.get(productsPage.productInfo).each(($el) => {
            cy.wrap($el).should('contain', 'Jeans');
        });

    });

})