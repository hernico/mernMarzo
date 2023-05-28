// Importar express y faker
const express = require('express');
const faker = require('faker');
const app = express();
app.use(express.json());
app.use(express.json(), express.urlencoded({ extended: true }));


// Crear una instancia de Express
const app = express();
const port = 3000;

// Definir las clases Usuario y Empresa
class Usuario {
  constructor() {
    this.nombre = faker.person.firstName();
    this.apellido = faker.person.lastName();
    this.nombreUsuario = faker.internet.userName();
    this.email = faker.internet.email();
    this.telefono = faker.phone.phoneNumber();
  }
}
// Importar express y faker
const express = require('express');
const faker = require('faker');
const app = express();
app.use(express.json());


// Crear una instancia de Express
console.log('Creating an instance of Express');
const app = express();
const port = 3000;

// Definir las clases Usuario y Empresa
class Usuario {
  constructor() {
    this.nombre = faker.person.firstName();
    this.apellido = faker.person.lastName();
const express = require('express');
const faker = require('faker');
const app = express();
app.use(express.json());


// Crear una instancia de Express
class Empresa {
  constructor() {
    this.nombre = faker.company.companyName();
    this.direccion = {
      calle: faker.address.streetName(),
      ciudad: faker.address.city(),
      estado: faker.address.state(),
      codigoPostal: faker.address.zipCode(),
      pais: faker.address.country()
    };
  }
}

// Ruta "/api/users/new" para devolver un nuevo usuario
app.get('/api/users/new', (req, res) => {
  const nuevoUsuario = new Usuario();
  res.json(nuevoUsuario);
});

// Ruta "/api/companies/new" para devolver una nueva compañía
app.get('/api/companies/new', (req, res) => {
  const nuevaEmpresa = new Empresa();
  res.json(nuevaEmpresa);
});

// Ruta "/api/user/company" para devolver un nuevo usuario y una nueva compañía
app.get('/api/user/company', (req, res) => {
  const nuevoUsuario = new Usuario();
  const nuevaEmpresa = new Empresa();
  res.json({ usuario: nuevoUsuario, empresa: nuevaEmpresa });
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});