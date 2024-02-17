
import { Invoice } from "./classes/invoice.js"
import { Payments } from "./classes/payments.js"
import { listTemplate } from "./classes/classList.js"
import { hasFomatter } from "./interfaces/hasFomatter"


// interface isPerson {
//     name: string;
//     age: number;
//     speak(a: string): void;
//     spend(a: number): number
// }

// const micheal: isPerson = {
//     name: 'micheal',
//     age: 19,
//     speak(text: string) {
//         console.log(text)
//     },
//     spend(amount: number): number {
//           console.log('i spent', amount)
//         return amount
//     },
// }

// import { Payments } from './classes/payments.js'

// import { Invoice } from './classes/invoice.js'
// import { hasFomatter } from './interfaces/hasFomatter.js'

// let docOne: hasFomatter;
// let docTwo: hasFomatter;

// docOne = new Invoice('micheal', 'building', 300)
// docTwo = new Payments('micheal', 'builfding', 400)

// let docs: hasFomatter[] = [];

// docs.push(docOne)
// docs.push(docTwo)

// console.log(docs)



// let invOne = new Invoice('micheal', 'building job', 300)
// let invTwo = new Invoice('peter', 'building web', 560)




// let invoices: Invoice[] = [];
// invoices.push(invOne)
// invoices.push(invTwo)

// console.log(invoices)

// invoices.forEach(inv => {
//     console.log(inv.name, inv.amount, inv.format())
// })



//
const anchor = document.querySelector('a')!
// console.log(anchor.href)


//let form = document.forms[0]

//let form = document.querySelector('form')!

// type casting changes the type of the element 

let form = document.querySelector('.web-form') as HTMLFormElement

// console.log(form.childNodes)


const select = document.querySelector('#select') as HTMLSelectElement
const fromTo = document.querySelector('#fromTo') as HTMLInputElement
const details = document.querySelector('#details') as HTMLInputElement
const amount = document.querySelector('#amount') as HTMLInputElement

//console.log(select, fromTo, details, amount


// list template insances

const ul = document.querySelector('ul')!
const list = new listTemplate(ul)

let doc: hasFomatter;

form.addEventListener('submit', (e: Event) => {
    e.preventDefault()

    let value: [string, string, number]
    value = [fromTo.value, details.value, amount.valueAsNumber]

    if (select.value === 'invoice') {
        doc = new Invoice(...value)

    } else {
        doc = new Payments(...value)


    }
    list.render(doc, select.value, 'end')



})

// generic

const addUID = <T extends { name: string }>(obj: T) => {
    let uid = Math.floor(Math.random() * 2000)
    return { ...obj, uid }

}

let docOne = addUID({ name: 'micheal', age: 50 })
let docTwo = addUID({ name: 'emma' })

console.log(docOne.age, docOne.name)

enum ShopType { BOOK, TITLE, DIRECTOR, FILM, PERSON }
interface Shop<T> {
    name: string;
    shopNumber: number;
    data: T
}

let docFive: Shop<object> = {
    name: 'micheal',
    shopNumber: ShopType.PERSON,
    data: { name: 'yoshi' }
}


let docSix: Shop<object> = {
    name: 'micheal',
    shopNumber: ShopType.BOOK,
    data: { title: 'sun', author: 'micheal' }
}

console.log(docSix, docFive)



