const PersonController = require('../controller/person.controller');

module.exports = (app) => {
    app.get('/api', PersonController.index);

    app.get('/api/user/new', PersonController.getUsers);
    app.post('/api/user/new', PersonController.getUsers);
    app.delete('/api/user/new/:id', PersonController.getUsers);
    app.put('/api/user/new/:id', PersonController.getUsers);
};


