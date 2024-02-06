import { hasFomatter } from '../interfaces/hasFomatter.js'

export class Invoice implements hasFomatter {
    // public name: string;
    // private details: string;
    // readonly amount: number;

    constructor(
        public name: string,
        public details: string,
        readonly amount: number
    ) { }

    format() {
        return `${this.name} owes me ${this.amount} for ${this.details}`
    }
}