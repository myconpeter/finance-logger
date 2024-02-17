import { hasFomatter } from '../interfaces/hasFomatter.js'

export class Payments implements hasFomatter {
    // public name: string;
    // private details: string;
    // readonly amount: number;

    constructor(
        public recipient: string,
        public details: string,
        readonly amount: number
    ) { }

    format() {
        return `${this.recipient} is owed ${this.amount} for ${this.details}`
    }
}


//  interfaces

interface Resources<T> {
    uid: number;
    resourceName: string;
    data: T;
}

const docThree: Resources<string> = {
    uid: 1,
    resourceName: 'micheal',
    data: 'micheal'
}

const docFour: Resources<string[]> = {
    uid: 2,
    resourceName: 'peter',
    data: ['micheal', 'ekanem']
}


console.log(docFour, docThree)