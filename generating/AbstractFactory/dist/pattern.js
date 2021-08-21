"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline_sync_1 = __importDefault(require("readline-sync"));
// ! ProductA
class ProductA {
    constructor(name_ = "name", id_ = 1) {
        this.id = id_;
        this.name = name_;
    }
}
class ProductA1 extends ProductA {
    constructor(name_ = "name", id_ = 1, cost_ = 322) {
        super(name_, id_);
        this.cost = cost_;
    }
    info() {
        console.table(this);
    }
}
class ProductA2 extends ProductA {
    constructor(name_ = "name", id_ = 1, weight_ = 322) {
        super(name_, id_);
        this.weight = weight_;
    }
    info() {
        console.log(this);
    }
}
// ! ProductB
class ProductB {
    constructor(code_ = "#322&228", id_ = 1) {
        this.id = id_;
        this.code = code_;
    }
}
class ProductB1 extends ProductB {
    constructor(code_ = "#322&228", id_ = 1, cost_ = 228) {
        super(code_, id_);
        this.cost = cost_;
    }
    get data() {
        return this;
    }
}
class ProductB2 extends ProductB {
    constructor(code_ = "#322&228", id_ = 1, weight_ = 322) {
        super();
        this.weight = weight_;
    }
    get data() {
        return this;
    }
}
// ! Factory
class Factory {
    doOperations() {
        const collection = {
            A: this.createProductA(),
            B: this.createProductB(),
        };
        collection.A.info();
        console.info(`B - data: ${collection.B.data}`);
    }
}
class Factory1 extends Factory {
    createProductA() {
        return new ProductA1();
    }
    createProductB() {
        return new ProductB1();
    }
}
class Factory2 extends Factory {
    createProductA() {
        return new ProductA2();
    }
    createProductB() {
        return new ProductB2();
    }
}
const main = () => {
    let factory, whiteList = ['1', '2'], answer = '';
    do {
        answer = readline_sync_1.default.question('input type of product`s collection: 1 or 2: \n >> ');
    } while (!whiteList.includes(answer));
    console.log(answer);
    switch (answer) {
        case '1':
            factory = new Factory1();
            break;
        case '2':
            factory = new Factory2();
            break;
        default:
            throw new Error('bad type of product');
    }
    factory.doOperations();
};
main();
