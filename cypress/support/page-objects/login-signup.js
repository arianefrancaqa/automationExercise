export const loginSignUpPage = {
    signUpNameInput: '[data-qa="signup-name"]',
    signUpEmailInput: '[data-qa="signup-email"]',
    signUpButton: '[data-qa="signup-button"]'
}

export const accountInformationPage = {
    titleRadioButton: (title) => `input[type="radio"][name="title"][value="${title}"]`,
    passwordInput: '[data-qa="password"]',
    daysDropdown: '#days',
    monthsDropdown: '#months',
    yearsDropdown: '#years',
    firstNameInput: '[data-qa="first_name"]',
    lastNameInput: '[data-qa="last_name"]',
    companyNameInput: '[data-qa="company"]',
    streetInput: '[data-qa="address"]',
    countryDropdown: '#country',
    cityInput: '[data-qa="city"]',
    stateInput: '[data-qa="state"]',
    zipcodeInput: '[data-qa="zipcode"]',
    mobileNumberInput: '[data-qa="mobile_number"]',
    createAccountButton: '[data-qa="create-account"]'
}
