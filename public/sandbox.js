"use strict";
// const character = 'micheal';
// console.log(character)
// let allItems = document.querySelectorAll('li')
// console.log(allItems)
// allItems.forEach((i) => {
//     console.log(i)
// })
let character = 'micheal';
let isTrue = false;
let number = 30;
//character = 30
//isTrue = 'micheal'
//number = true
// working with functions //
const circ = (d) => {
    return d * Math.PI;
};
//console.log(circ(10))
/* working with arrays  */
let boys = ['micheal', 'peter', 'ekanem'];
boys.push('victor');
boys.push('emma');
//console.log(boys)
let any = [30, 'micheal'];
any.push('micheal');
any.push(20);
let me;
let numbers;
numbers = ['micheal'];
let mixed = [];
mixed.push('micheal');
mixed.push(20);
mixed.push(false);
//console.log(mixed)
/* objects */
let ninjas;
ninjas = {
    name: 'mic',
    age: true
};
let nums = [];
//console.log('hwfa')
// functopns
let greet;
greet = () => {
    console.log('hello');
};
let add = (a, b, c = 100) => {
    console.log(a + b);
    console.log(c);
};
//add(10, 200)
let minus = (b, c) => {
    return c - b;
};
let result = minus(10, 6);
const greetAgain = (user) => {
    console.log(`${user.item} says hello `);
};
//greetAgain({ uid: 'micheal', item: 'njl' })
// functions signature
// example 1
let sayHello;
sayHello = (name, age) => {
    console.log(`hello ${name} you are ${age} years old`);
};
// sayHello('MICHEAL', 22)
//  example two
let calc;
calc = (first, secound, action) => {
    if (action === 'add') {
        return first + secound;
    }
    else {
        return first - secound;
    }
};
let logDetails;
logDetails = (mic) => {
    console.log('hello');
};
