console.log('Hello World');
// console-> object log-> method
console.error('This is an error')
console.warn('This is an error')
console.info('This is an error')
var fname = 'John Doe'
console.log(fname)


//VARIABLES:  let-> reassign values, const-> cannot reassign values --> introduced in ES6

//DATA TYPES: Strings, Numbers, BOoleans, null, undefined, Symbol-> ES6

const str = 'String';
const age = 23;
const rating = 4.5;
const isbool = true;
const x = null;
const y = undefined;
let z;

console.log(typeof str);
console.log(typeof age);
console.log(typeof rating);
console.log(typeof isbool);
console.log(typeof x); // wrong
console.log(typeof y);

//Concatenation
console.log('My name is ' + fname + ' and I am ' + age);
//Template Literals
console.log(`My name is ${fname} and I am ${age}`); //ES6

const s = 'Hello World';
const a = 'technology, computers, IT, code'
console.log(s.length);
console.log(s.toUpperCase());
console.log(s.toLowerCase());
console.log(s.substring(0, 5).toUpperCase());
console.log(a.split(', '));

const nums = new Array(1, 2, 3, 4, 5);
console.log(nums);
console.log(nums[0]);

const fruits = ['apples', 'oranges', 'pears'];
fruits[3] = 'grapes';
fruits.push('mangoes');
fruits.unshift('strawberries');
fruits.pop();
fruits.shift();
// console.log(fruits.isArray('grapes'));
console.log(fruits);

//Objects

const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 50,
    hobbies: ['music', 'movies', 'sports'],
    address: {
        street: '50 main st',
        city: 'Boston',
        state: 'MA'
    }
}
console.log(person.firstName, person.lastName);

const { firstName, lastName, address: { city } } = person; //Destructuring in ES6

console.log(firstName, lastName, city);
console.log(person.address.street)

person.email = 'john@gmail.com'
console.log(person);

const todos = [{
        id: 1,
        text: 'Take out trash',
        isCompleted: true
    },
    {
        id: 2,
        text: 'Meeting with boss',
        isCompleted: true
    }
];

todos.push({
    id: 3,
    text: 'Dentist appt',
    isCompleted: false
});

console.log(todos[1].text);
const todoJSON = JSON.stringify(todos);
console.log(todoJSON);

//For
for (let i = 0; i < 10; i++) {
    console.log(`For Loop: ${i}`);
    if (i === 2) {
        console.log('2 is my favorite number');
        break;
    }
}

for (let i = 0; i < todos.length; i++) {
    console.log(` ${todos[i].text}`);
}

for (let todo of todos) {
    console.log(todo.text);
}

//While
let i = 0;
while (i <= 10) {
    console.log(`While Loop: ${i}`);
    i++;
}

todos.forEach(function(todo) {
    console.log(todo.text);
});

const todoText = todos.map(function(todo) {
    return todo.text;
});
console.log(todoText);

const todoTextcomp = todos.filter(function(todo) {
    return todo.isCompleted === true;
}).map(function(todo) {
    return todo.text;
});
console.log(todoTextcomp);