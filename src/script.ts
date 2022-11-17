// Explicit types
let user: string;
let age: number;
let isLoggedIn: boolean;
let uid: string | number;

// Arrays
let users: string[] = []; // Initialize array so you can push onto it
users.push('Blade');

// Union types
let lists: (string | number | boolean)[] = [];
lists = ['blade', 40, true];

// Objects - An array is also a type of object
let personOne: object;
personOne = { name: 'Blade', title: 'Developer', age: 20 };

let personTwo: {
  name: string;
  age: number;
  isActive: boolean;
};

personTwo = {
  name: 'Tanya',
  age: 24,
  isActive: true
};

// any - Use when unsure of type the props is going to take (beware)
const userAge: any = 50;
let mixed: any[] = [];
mixed = ['blade', true, 34];
let ninja: { name: any; age: any };
ninja = {
  name: 25,
  age: 'Blade'
};

// Functions - use ? for optional field, if there's a default value, remove ?
// Void - when we don't return anything
const functionOne = (
  a: number,
  b: number,
  c: string = 'Blade',
  d?: number | string
): void => {
  console.log(a + b, c);
};

functionOne(10, 20);

// We're returning a number
const minus = (a: number, b: number): number => {
  return a - b;
};

const result = minus(20, 10);
console.log(result);

// Type Aliases - used to reduce code duplication
type stringOrNum = string | number;
type person = { name: string; userID: stringOrNum };
const greet = (user: { name: stringOrNum }) => {
  console.log(`${user.name} says hello`);
};
const greetAgain = (user: person) => {
  console.log(`${user.name} with user ID ${user.userID} says hello`);
};

greet({ name: 'Blade' });
greetAgain({ name: 'Blade', userID: 'lkd222' });

// Function signatures
let calc: (a: number, b: number, c: string) => number;

calc = (numOne: number, numTwo: number, operand: string) => {
  if (operand === 'add') {
    return numOne + numTwo;
  } else {
    return numOne - numTwo;
  }
};

let userGreeting: (obj: person) => void;
userGreeting = (user: person) => {
  console.log(`${user.name} with user ID ${user.userID} says hello`);
};

userGreeting({ name: 'Hellen', userID: 100 });

// DOM & Type Casting
const form = document.querySelector('form') as HTMLFormElement;
const nameField = document.querySelector('#name') as HTMLInputElement;
const ageField = document.querySelector('#age') as HTMLInputElement;

form.addEventListener('submit', (e: Event) => {
  e.preventDefault();
  console.log(
    nameField.value,
    ageField.valueAsNumber // Output number instead of string
  );
});

// Interface - Used to enforce structure within classes or objects
interface isPerson {
  name: string;
  email: string;
  age: number;
  greet?(name: string): void;
}

const currentUser: isPerson = {
  name: 'Blade',
  email: 'animashauntaofiq@gmail.com',
  age: 14,
  greet(name: string): void {
    console.log(`Hey ${name}, welcome back`);
  }
};

let me: isPerson;

const greetUser = (person: isPerson) => {
  console.log(
    `Hi there, my name is ${person.name} and I'm ${person.age}yrs old`
  );
};

greetUser({ name: 'Taofiq', age: 25, email: 'taofiq@me.com' });
console.log(currentUser);

// Generics - Allows reuseable block of codes that can be used with different (unknown data) types
const randomUser = <T extends object>(obj: T) => {
  let uid = Math.floor(Math.random() * 100);
  return { ...obj, uid };
};

const generatedUser = randomUser({ name: 'Blade', age: 20 });

console.log(generatedUser);

// Generics and Interface
interface user<T> {
  name: string;
  age: number;
  info: T;
}

const stringUser: user<string> = {
  name: 'Blade',
  age: 25,
  info: "I'm a software developer"
};

const arrayUser: user<object> = {
  name: 'Blade',
  age: 25,
  info: ['I', 'am', 'awesome']
};

console.log(
  'Interface\n',
  'String Info:',
  stringUser,
  '\n',
  'Object Info:',
  arrayUser
);

// Enums - Stores stuffs and associate them with a numeric value.
enum dataType {
  MUMS,
  MUM,
  MOM
}

const newEnum: user<number> = {
  name: 'Blade',
  age: 20,
  info: dataType.MUM
};

console.log('Enum:', newEnum);

// Tuples - Can be used to set the position of a type in an array
let tup: [string, number, boolean] = ['blade', 56, true];
let student: [string, number];
student = ['Blade', 20];
