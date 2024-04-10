import { navMenu } from "../../support/page-objects/navMenu";
import { loginSignUpPage, accountInformationPage } from "../../support/page-objects/login-signup";

describe(`Sign up UI Tests`, () => {

    beforeEach(() => {
        cy.visit('/')
    });

    it('#1 Should be able to do a Sign up', () => {
        cy.get(navMenu.loginButton)
            .click()
        cy.generateRandomData().then((randomData) => {
            cy.get(loginSignUpPage.signUpNameInput)
                .type(randomData.firstName)
            cy.get(loginSignUpPage.signUpEmailInput)
                .type(randomData.email)
            cy.get(loginSignUpPage.signUpButton)
                .click()
            cy.get(accountInformationPage.titleRadioButton('Mrs'))
                .check()
            cy.get(accountInformationPage.passwordInput)
                .type(randomData.password)
            cy.get(accountInformationPage.daysDropdown)
                .select('1')
            cy.get(accountInformationPage.monthsDropdown)
                .select('8')
            cy.get(accountInformationPage.yearsDropdown)
                .select('1995')
            cy.get(accountInformationPage.firstNameInput)
                .type(randomData.firstName)
            cy.get(accountInformationPage.lastNameInput)
                .type(randomData.lastName)
            cy.get(accountInformationPage.companyNameInput)
                .type(randomData.companyName)
            cy.get(accountInformationPage.streetInput)
                .type(randomData.streetAddressUS)
            cy.get(accountInformationPage.countryDropdown)
                .select('United States')
            cy.get(accountInformationPage.stateInput)
                .type(randomData.stateUS)
            cy.get(accountInformationPage.cityInput)
                .type(randomData.cityUS)
            cy.get(accountInformationPage.zipcodeInput)
                .type(randomData.zipCodeUS)
            cy.get(accountInformationPage.mobileNumberInput)
                .type(randomData.phoneUS)
            cy.get(accountInformationPage.createAccountButton)
                .click()
            cy.contains('Account Created!')
                .should('be.visible')
            cy.contains('Congratulations! Your new account has been successfully created!')
                .should('be.visible')
        })
    });

})