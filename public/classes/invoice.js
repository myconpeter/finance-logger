export class Invoice {
    name;
    details;
    amount;
    // public name: string;
    // private details: string;
    // readonly amount: number;
    constructor(name, details, amount) {
        this.name = name;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.name} owes me ${this.amount} for ${this.details}`;
    }
}
