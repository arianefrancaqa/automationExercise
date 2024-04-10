
import { faker, fakerEN_US } from "@faker-js/faker";

const generateRandomData = () => {
    const firstName = faker.person.firstName();
    const lastName = faker.person.lastName();
    const email = `${firstName}${lastName}@mail.com`;
    const streetAddressUS = fakerEN_US.location.streetAddress();
    const cityUS = fakerEN_US.location.city();
    const stateUS = fakerEN_US.location.state();
    const zipCodeUS = fakerEN_US.location.zipCode();
    const phoneUS = faker.phone.number('+1 202 ### ####');
    const description = faker.lorem.lines(1);
    const password = faker.internet.password({ length: 12 });
    const companyName = faker.company.name();

    return {
        firstName,
        lastName,
        email,
        streetAddressUS,
        cityUS,
        stateUS,
        zipCodeUS,
        phoneUS,
        description,
        password,
        companyName
    };
};

Cypress.Commands.add('generateRandomData', () => {
    return generateRandomData();
});
export default generateRandomData;



