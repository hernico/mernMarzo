const person = {
firstName: 'Nicolas',
lastName: 'Hernandez',
email: 'hernico@mgmail.com',
password: '12345',
username: 'hernico',
addresses: [
    {
    address: '1600 Pennsylvania Avenue',
    city: 'Washington, D.C.',
    zipcode: '20500',
    },
{
    address: '221B Baker St.',
    city: 'London',
    zipcode: 'WC2N 5DU',
}
],
createdAt: 1543945177623
};

const animals = ['horse', 'dog','fish'];

const {email} = person;
const [firstAnimal] = animals;
console.log (email);
console.log(firstAnimal);

const {password, username} = person;
console.log(password,username)

const [...feo]= animals;

console.log(feo)


const{ password: nuevoPassword} = person;
console.log(nuevoPassword)


const{ addresses: [whiteHouse, sherlock]} = person;

console.log(whiteHouse, sherlock)


hola = ['emma','val','nick']
console.log(hola)
hola2 = hola.sort()
console.log(hola2)
hola3 = hola.reverse()
console.log(hola3)


num= [1,2,4,6,343,68,3,5,7,9,23,45,65]



num2 = num.sort(function(a,b){return a-b});

console.log(num2)
num3 = num.sort (function (a,b) {return b-a})
console.log(num3)

class Vehicle {
    constructor(marca, modelo,color) {
        this.miles = 0;
        this.marca = marca;
        this.modelo = modelo;
        this.color = color;
    }
    drive(){
        this.miles += 10;
    }
}

const car = new Vehicle ('Toyota', 'Camry','yellow');
car.drive();
console.log(car)

class Camry extends Vehicle {
    constructor(color) {
        super ( "Toyota",'Camry', color);
        this.hp = 616;
    }
}