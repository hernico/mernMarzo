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


