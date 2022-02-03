console.log('Hello World');
// console-> object log-> method
console.error('This is an error')
console.warn('This is an error')
console.info('This is an error')
var fname = 'John Doe'
console.log(fname)


//VARIABLES:  let-> reassign values, const-> cannot reassign values --> introduced in ES6

//DATA TYPES: Strings, Numbers, Booleans, null, undefined, Symbol-> ES6

const str = 'String';
const age = 23;
const rating = 4.5;
const isbool = true;
// const x = null;
// const y = undefined;
let z;

console.log(typeof str);
console.log(typeof age);
console.log(typeof rating);
console.log(typeof isbool);
// console.log(typeof x); // wrong
// console.log(typeof y);

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

//Conditional Statements
// const x = 10;
const x = '10';
const y = 20;

if (x == 10) {
    console.log('x is 10');
}
if (x === 10) {
    console.log('x is 10');
} else {
    console.log('x is not 10');
}

// ternary operator
console.log(x === 10 ? 'x is 10' : 'x is not 10');

//Switch
switch (x) {
    case 10:
        console.log('x is 10');
        break;
    case 20:
        console.log('x is 20');
        break;
    default:
        console.log('x is not 10 or 20');
        break;
}

//Functions
function addNums(num1 = 1, num2 = 1) {
    return num1 + num2;
}

sum = addNums();
console.log(sum);

//Arrow Functions

// const addNumsarr = (num1 = 2, num2 = 1) => {
//     return num1 + num2;
// }

const addNumsarr = (num1 = 2, num2 = 1) => num1 + num2;

sum = addNumsarr();
console.log(sum);


//Classes

function Person(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);

}

//Instaniate object
const person1 = new Person('John', 'Doe', '4-3-1980');

const person2 = new Person('Mary', 'Smith', '3-6-1985');

console.log(person1);
console.log(person2.dob.getDay());
// console.log(person2.getBirthYear());
// console.log(person1.getFullName());

Person.prototype.getBirthYear = function() {
    return this.dob.getFullYear();
}
Person.prototype.getFullName = function() {
    return `${this.firstName} ${this.lastName}`;
}

console.log(person1.getBirthYear());
console.log(person1.getFullName());

// ES6

class PersonClass {
    constructor(
        firstName,
        lastName,
        dob
    ) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = new Date(dob);
    }
    getBirthYear() {
        return this.dob.getFullYear();
    }
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}


//DOM
// console.log(window)
//     // Single element
// document.getElementById('my-form');
// console.log(document.querySelector('.container'));
// // Multiple Element Selectors
// console.log(document.querySelectorAll('.item'));
// console.log(document.getElementsByTagName('li'));
// console.log(document.getElementsByClassName('item'));

// const items = document.querySelectorAll('.item');
// items.forEach((item) => console.log(item));


// // MANIPULATING THE DOM
// const ul = document.querySelector('.items');
// // ul.remove();
// // ul.lastElementChild.remove();
// ul.firstElementChild.textContent = 'Hello';
// ul.children[1].innerText = 'Brad';
// ul.lastElementChild.innerHTML = '<h1>Anubhab</h1>';

// const btn = document.querySelector('.btn');
// // btn.style.background = 'red';


// // // EVENTS

// // Mouse Event
// btn.addEventListener('click', e => {
//     console.log('click');
//     e.preventDefault();
//     console.log(e.target.className);
//     // document.getElementById('my-form').style.background = '#ccc';
//     // document.querySelector('body').classList.add('bg-dark');
//     ul.lastElementChild.innerHTML = '<h1>Changed</h1>';
// });

// Keyboard Event
// const nameInput = document.querySelector('#name');
// nameInput.addEventListener('input', e => {
//     document.querySelector('.container').append(nameInput.value);
// });


// USER FORM SCRIPT

// Put DOM elements into variables
const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

// Listen for form submit
myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
    e.preventDefault();

    if (nameInput.value === '' || emailInput.value === '') {
        // alert('Please enter all fields');
        msg.classList.add('error');
        msg.innerHTML = 'Please enter all fields';

        // Remove error after 3 seconds
        setTimeout(() => msg.remove(), 3000);
    } else {
        // Create new list item with user
        const li = document.createElement('li');

        // Add text node with input values
        li.appendChild(document.createTextNode(`${nameInput.value}: ${emailInput.value}`));

        // Add HTML
        li.innerHTML = `<strong>${nameInput.value}</strong>: ${emailInput.value}`;

        // Append to ul
        userList.appendChild(li);

        // Clear fields
        nameInput.value = '';
        emailInput.value = '';
    }
}