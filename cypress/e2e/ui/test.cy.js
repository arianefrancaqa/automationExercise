describe(`
    Automation exercise:
    1. Sign up for account
    2. Go to Products
    3. Expand/Collapse category menu and check states
    4. Search for "jeans"
    5. Verify results
    6. Add a product to the cart
    7. Verify cart
    8. Remove item from cart and verify
    9. Empty cart
    10. Update user through the API
    11. Delete account
`, () => {

    beforeEach(() => {
        cy.authenticateWithProduct({
            tenantEmail: users.TENANT_ADMIN.tenantEmail,
            tenantPassword: users.TENANT_ADMIN.tenantPassword,
            tenantId: users.TENANT_ADMIN.tenantId,
            productId: '4'
        }).as('newToken');
    });

    it('#1 Should be able to do a Sign up', () => {
    });

    it('#2 Should be able to go to Products', () => {
    });

    it('#3 Should be able to Expand/Collapse category menu and check states', () => {
    });

    it('#4 & #5 Should be able to Search for "jeans" and verify the results', () => {
    });

    it('#6 & #7 Should be able to Add a product to the cart and verify cart', () => {
    });

    it('#8 & #9 Should be able to Remove item from cart and verify empty cart', () => {
    });



})