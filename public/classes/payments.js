export class Payments {
    recipient;
    details;
    amount;
    // public name: string;
    // private details: string;
    // readonly amount: number;
    constructor(recipient, details, amount) {
        this.recipient = recipient;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.recipient} is owed ${this.amount} for ${this.details}`;
    }
}
const docThree = {
    uid: 1,
    resourceName: 'micheal',
    data: 'micheal'
};
const docFour = {
    uid: 2,
    resourceName: 'peter',
    data: ['micheal', 'ekanem']
};
console.log(docFour, docThree);
