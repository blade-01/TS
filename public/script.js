"use strict";
// Explicit types
let user;
let age;
let isLoggedIn;
let uid;
// Arrays
let users = []; // Initialize array so you can push onto it
users.push('Blade');
// Union types
let lists = [];
lists = ['blade', 40, true];
// Objects - An array is also a type of object
let personOne;
personOne = { name: 'Blade', title: 'Developer', age: 20 };
let personTwo;
personTwo = {
    name: 'Tanya',
    age: 24,
    isActive: true
};
// any - Use when unsure of type the props is going to take (beware)
const userAge = 50;
let mixed = [];
mixed = ['blade', true, 34];
let ninja;
ninja = {
    name: 25,
    age: 'Blade'
};
// Functions - use ? for optional field, if there's a default value, remove ?
// Void - when we don't return anything
const functionOne = (a, b, c = 'Blade', d) => {
    console.log(a + b, c);
};
functionOne(10, 20);
// We're returning a number
const minus = (a, b) => {
    return a - b;
};
const result = minus(20, 10);
console.log(result);
const greet = (user) => {
    console.log(`${user.name} says hello`);
};
const greetAgain = (user) => {
    console.log(`${user.name} with user ID ${user.userID} says hello`);
};
greet({ name: 'Blade' });
greetAgain({ name: 'Blade', userID: 'lkd222' });
// Function signatures
let calc;
calc = (numOne, numTwo, operand) => {
    if (operand === 'add') {
        return numOne + numTwo;
    }
    else {
        return numOne - numTwo;
    }
};
let userGreeting;
userGreeting = (user) => {
    console.log(`${user.name} with user ID ${user.userID} says hello`);
};
userGreeting({ name: 'Hellen', userID: 100 });
// DOM & Type Casting
const form = document.querySelector('form');
const nameField = document.querySelector('#name');
const ageField = document.querySelector('#age');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(nameField.value, ageField.valueAsNumber // Output number instead of string
    );
});
const currentUser = {
    name: 'Blade',
    email: 'animashauntaofiq@gmail.com',
    age: 14,
    greet(name) {
        console.log(`Hey ${name}, welcome back`);
    }
};
let me;
const greetUser = (person) => {
    console.log(`Hi there, my name is ${person.name} and I'm ${person.age}yrs old`);
};
greetUser({ name: 'Taofiq', age: 25, email: 'taofiq@me.com' });
console.log(currentUser);
// Generics - Allows reuseable block of codes that can be used with different (unknown data) types
const randomUser = (obj) => {
    let uid = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { uid });
};
const generatedUser = randomUser({ name: 'Blade', age: 20 });
console.log(generatedUser);
const stringUser = {
    name: 'Blade',
    age: 25,
    info: "I'm a software developer"
};
const arrayUser = {
    name: 'Blade',
    age: 25,
    info: ['I', 'am', 'awesome']
};
console.log('Interface\n', 'String Info:', stringUser, '\n', 'Object Info:', arrayUser);
// Enums - Stores stuffs and associate them with a numeric value.
var dataType;
(function (dataType) {
    dataType[dataType["MUMS"] = 0] = "MUMS";
    dataType[dataType["MUM"] = 1] = "MUM";
    dataType[dataType["MOM"] = 2] = "MOM";
})(dataType || (dataType = {}));
const newEnum = {
    name: 'Blade',
    age: 20,
    info: dataType.MUM
};
console.log('Enum:', newEnum);
// Tuples - Can be used to set the position of a type in an array
let tup = ['blade', 56, true];
let student;
student = ['Blade', 20];
