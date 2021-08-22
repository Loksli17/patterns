"use strict";
class ProductA {
    constructor() {
        this.a_ = null;
        this.b_ = null;
        this.c_ = null;
    }
    ;
    set a(a) { this.a_ = a; }
    set b(b) { this.b_ = b; }
    set c(c) { this.c_ = c; }
}
class ProductB {
    constructor() {
        this.a_ = null;
        this.b_ = null;
        this.c_ = null;
    }
    ;
    set a(a) { this.a_ = a; }
    set b(b) { this.b_ = b; }
    set c(c) { this.c_ = c; }
}
/**
 * ! Builder
 */
class Builder {
}
class BuilderA extends Builder {
    constructor() {
        super();
        this.result = new ProductA();
    }
    reset() {
        this.result = new ProductA();
    }
    buildStepA(a) {
        this.result.a = a;
        return this;
    }
    buildStepB(b) {
        this.result.b = b;
        return this;
    }
    buildStepC(c) {
        this.result.c = c;
        return this;
    }
    getResult() {
        return this.result;
    }
}
class BuilderB extends Builder {
    constructor() {
        super();
        this.result = new ProductB();
    }
    reset() {
        this.result = new ProductB();
    }
    buildStepA(a) {
        this.result.a = a;
        return this;
    }
    buildStepB(b) {
        this.result.b = b;
        return this;
    }
    buildStepC(c) {
        this.result.c = c;
        return this;
    }
    getResult() {
        return this.result;
    }
}
class Director {
    createProductA(builder) {
        builder.buildStepA(6).buildStepB(4).buildStepC(5);
    }
    createReverseProductA(builder) {
        builder.buildStepC(1).buildStepA(4).buildStepB(5);
    }
    createProductB(builder) {
        builder.buildStepB(5).buildStepC(4);
    }
}
const main = () => {
    let director = new Director(), builderA = new BuilderA(), builderB = new BuilderB(), productA, productB;
    director.createProductA(builderA);
    productA = builderA.getResult();
    console.log('classic ProductA:');
    console.table(productA);
    director.createReverseProductA(builderA);
    productA = builderA.getResult();
    console.log('reverse ProductA:');
    console.table(productA);
    director.createProductB(builderB);
    productB = builderB.getResult();
    console.log('classic ProductB:');
    console.table(productB);
};
main();
