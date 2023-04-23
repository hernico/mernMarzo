const cars = ['tesla','mercedes','honda']
const [randomCar] = cars
const [ ,otherRandomCar] = cars

console.log(randomCar)
console.log(otherRandomCar)

const employee ={
    name: 'elon',
    age:47,
    company: 'tesla'
}
const {name: otherName} = employee;
// console.log(namej);
console.log(otherName);

const person = {
    name: 'Phill Smith',
    age: 47,
    Height: ' 6 feet'
}

const password = '12345'
const { password: hashedPassword} = person;
console.log(password)
console.log(hashedPassword)


const numbers = [8,2,3,5,6,1,67,12,2];
const [,first]= numbers
const [,,,second]= numbers
const [,,,,,,,,third] =numbers

console.log(first == second)
console.log (first == third)

const array = [1,2,3,4,5]
console.log(array)
const resultArray = array.map(element => element +10)
console.log(resultArray)