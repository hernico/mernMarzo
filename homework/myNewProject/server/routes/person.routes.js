const PersonController = require('../controller/person.controller');
module.exports = function(app){
    app.get('/api', PersonController.index);
}