const API_URL = Cypress.env('apiUrl');

Cypress.Commands.add('postCreateAccount', ({ name, email, password, firstName, lastName, companyName, address, country, zipcode, state, city, phone }) => {
    cy.api({
        method: 'POST',
        url: `${API_URL}/createAccount`,
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: {
            name: name,
            email: email,
            password: password,
            title: 'Mrs',
            birth_date: '1',
            birth_month: '5',
            birth_year: '1996',
            firstname: firstName,
            lastname: lastName,
            company: companyName,
            address1: address,
            country: country,
            zipcode: zipcode,
            state: state,
            city: city,
            mobile_number: phone
        },
        form: true
    });
});

Cypress.Commands.add('putUpdateCreateAccount', ({ name, email, password, firstName, lastName, companyName, address, country, zipcode, state, city, phone }) => {
    cy.api({
        method: 'PUT',
        url: `${API_URL}/updateAccount`,
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: {
            name: name,
            email: email,
            password: password,
            title: 'Mrs',
            birth_date: '1',
            birth_month: '5',
            birth_year: '1996',
            firstname: firstName,
            lastname: lastName,
            company: companyName,
            address1: address,
            country: country,
            zipcode: zipcode,
            state: state,
            city: city,
            mobile_number: phone
        },
        form: true
    });
});
