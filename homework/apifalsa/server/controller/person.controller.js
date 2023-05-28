const { faker } = require("@faker-js/faker");

module.exports.index = (req, res) => {
    res.json({
        message: 'Bienvenido a la API de Nick'
    });
}

module.exports.getUsers = (req, res) => {
    res.json({
        ID: faker.database.collation(),
        firstName: faker.person.firstName(),
        lastname: faker.person.lastName(),
        phoneNumber: faker.phone.number(),
        email: faker.internet.email(),
        password: faker.internet.password()
    });
}
