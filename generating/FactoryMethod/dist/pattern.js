"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline_sync_1 = __importDefault(require("readline-sync"));
/**
 * * Usually for base type is used INTERFACE, but I try to do it with abstract class (I think this is the best way)
 */
class Product {
    constructor(id_ = 1, name_ = "name") {
        this.name = name_;
        this.id = id_;
    }
}
class ProductA extends Product {
    constructor(id_ = 1, name_ = "name", cost_ = 322) {
        super(id_, name_);
        this.cost = 1000;
        this.cost = cost_;
    }
    doStuff() {
        console.table(this);
    }
}
class ProductB extends Product {
    constructor(id_ = 1, name_ = "name", weight_ = 322) {
        super(id_, name_);
        this.weight = 1000;
        this.weight = weight_;
    }
    doStuff() {
        console.log({ id: this.id, weight: this.weight });
    }
}
class Creator {
    doOperations() {
        const p = this.createProduct();
        p.doStuff();
    }
}
class CreatorA extends Creator {
    constructor() { super(); }
    createProduct() {
        return new ProductA();
    }
}
class CreatorB extends Creator {
    constructor() { super(); }
    createProduct() {
        return new ProductB();
    }
}
const main = () => {
    let creator, whiteList = ['A', 'B'], answer = '';
    do {
        answer = readline_sync_1.default.question('input type of product: A or B: \n >> ').toUpperCase();
    } while (!whiteList.includes(answer));
    console.log(answer);
    switch (answer) {
        case 'A':
            creator = new CreatorA();
            break;
        case 'B':
            creator = new CreatorB();
            break;
        default:
            throw new Error('bad type of product');
    }
    creator.doOperations();
};
main();
