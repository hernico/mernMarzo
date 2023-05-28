const { faker } = require("@faker-js/faker");


module.exports.getCompany = (req, res) => {
    res.json({
        ID: faker.database.collation(),
        CompanyName: faker.company.buzzNoun(),
        address: faker.location.streetAddress(),
        city: faker.location.city(),
        state: faker.location.state(),
        zipcode: faker.location.zipCode(),
        country: faker.location.country()
    });
}

module.exports.getCompanyPerson = (req, res) => {
    res.json({
        ID: faker.database.collation(),
        firstName: faker.person.firstName(),
        lastname: faker.person.lastName(),
        phoneNumber: faker.phone.number(),
        email: faker.internet.email(),
        password: faker.internet.password(),
        ID: faker.database.collation(),
        CompanyName: faker.company.buzzNoun(),
        address: faker.location.streetAddress(),
        city: faker.location.city(),
        state: faker.location.state(),
        zipcode: faker.location.zipCode(),
        country: faker.location.country()
    });
}

