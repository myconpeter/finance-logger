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

const circ = (d: number) => {
    return d * Math.PI
}

//console.log(circ(10))

/* working with arrays  */

let boys = ['micheal', 'peter', 'ekanem']

boys.push('victor')

boys.push('emma')

//console.log(boys)

let any = [30, 'micheal']


any.push('micheal')
any.push(20)

let me: string;

let numbers: string[]

numbers = ['micheal']
let mixed: (string | number | boolean)[] = [];
mixed.push('micheal');
mixed.push(20)
mixed.push(false)

//console.log(mixed)


/* objects */

let ninjas: { name: string, age: any }

ninjas = {
    name: 'mic',
    age: true
}

let nums: string[] = []


//console.log('hwfa')

// functopns

let greet: Function;

greet = () => {
    console.log('hello')
}


let add = (a: number, b: number, c: numOrString = 100) => {
    console.log(a + b)
    console.log(c)
}

//add(10, 200)

let minus = (b: number, c: number): number => {
    return c - b
}


let result = minus(10, 6)

/* type aliees */

// rather than explciitely typing a the type that needs to be accepted you can type alises
//it should be declared at the top shha

type numOrString = number | string;
type objWithName = { uid: string, item: string }


const greetAgain = (user: objWithName) => {
    console.log(`${user.item} says hello `)
}

//greetAgain({ uid: 'micheal', item: 'njl' })

// functions signature

// example 1

let sayHello: (a: string, b: number) => void

sayHello = (name: string, age: number) => {
    console.log(`hello ${name} you are ${age} years old`)
}

// sayHello('MICHEAL', 22)

//  example two

let calc: (a: number, b: number, c: string) => number

calc = (first: number, secound: number, action: string) => {
    if (action === 'add') {
        return first + secound
    } else {
        return first - secound
    }
}

// METHOD THREE
type person = { name: string, age: number, isLoggedIn: boolean }

let logDetails: (obj: person) => void;

logDetails = (mic: { name: string, age: number, isLoggedIn: boolean }) => {
    console.log('hello')
}
