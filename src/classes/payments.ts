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