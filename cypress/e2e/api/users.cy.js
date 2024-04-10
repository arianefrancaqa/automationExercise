describe(`Users API Tests`, () => {
    it('#10 Should be able to update user through API', () => {
        cy.generateRandomData().then((randomData) => {
            const request = cy.postCreateAccount({
                name: randomData.firstName,
                email: randomData.email,
                password: randomData.password,
                firstName: randomData.firstName,
                lastName: randomData.lastName,
                companyName: randomData.companyName,
                address: randomData.streetAddressUS,
                country: 'United States',
                zipcode: randomData.zipCodeUS,
                state: randomData.stateUS,
                city: randomData.cityUS,
                phone: randomData.phoneUS
            })
            return request.then((response) => {
                expect(response.status).to.eq(200);
            });
        })
    });

})