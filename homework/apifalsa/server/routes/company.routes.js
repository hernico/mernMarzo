const CompanyController = require('../controller/company.controller');
const PersonController = require('../controller/person.controller');


module.exports = (app) => {
    app.get('/api/companies/new', CompanyController.getCompany);
};



module.exports = (app) => {
    app.get('/api/company/new', CompanyController.getCompanyPerson);
}

