const express = require('express');
const faker = require('@faker-js/faker');
const app = express();
// app.use( express.urlencoded({ extended: true }) );

app.use(express.json());
// app.use(express.json(), express.urlencoded({ extended: true }));


const personRoutes = require('./server/routes/person.routes');
personRoutes(app);

const companyRoutes = require('./server/routes/company.routes');
companyRoutes(app);



const server = app.listen(8090, () => 
console.log(`Server running on port ${server.address().port}!`));

