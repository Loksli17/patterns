class ProductA{

    private a_: number | null = null;
    private b_: number | null = null;
    private c_: number | null = null;

    constructor(){};
    
    public set a(a: number) { this.a_ = a; }

    public set b(b: number) { this.b_ = b; }
 
    public set c(c: number) { this.c_ = c; }
    
}

class ProductB{

    private a_: number | null = null;
    private b_: number | null = null;
    private c_: number | null = null;

    constructor(){};
    
    public set a(a: number) { this.a_ = a; }

    public set b(b: number) { this.b_ = b; }
 
    public set c(c: number) { this.c_ = c; }
    
}



/**
 * ! Builder
 */
abstract class Builder{

    public abstract reset(): void;

    public abstract buildStepA(a: number): Builder;

    public abstract buildStepB(b: number): Builder;

    public abstract buildStepC(c: number): Builder;
}

class BuilderA extends Builder{

    private result: ProductA;

    constructor(){
        super();
        this.result = new ProductA();
    }

    public reset(){
        this.result = new ProductA();
    }

    public buildStepA(a: number): Builder{
        this.result.a = a;
        return this;
    }

    public buildStepB(b: number): Builder{
        this.result.b = b;
        return this;
    }

    public buildStepC(c: number): Builder{
        this.result.c = c;
        return this;
    }

    public getResult(): ProductA{
        return this.result;
    }
}

class BuilderB extends Builder{

    private result: ProductB;

    constructor(){
        super();
        this.result = new ProductB();
    }

    public reset(){
        this.result = new ProductB();
    }

    public buildStepA(a: number): Builder{
        this.result.a = a;
        return this;
    }

    public buildStepB(b: number): Builder{
        this.result.b = b;
        return this;
    }

    public buildStepC(c: number): Builder{
        this.result.c = c;
        return this;
    }

    public getResult(): ProductB{
        return this.result;
    }
}


class Director{
    
    public createProductA(builder: Builder): void{
        builder.buildStepA(6).buildStepB(4).buildStepC(5);
    }

    public createReverseProductA(builder: Builder): void{
        builder.buildStepC(1).buildStepA(4).buildStepB(5);
    }

    public createProductB(builder: Builder): void{
        builder.buildStepB(5).buildStepC(4);
    }
    
}


const main: Function = (): void => {

    let
        director: Director = new Director(),
        builderA: BuilderA = new BuilderA(),
        builderB: BuilderB = new BuilderB(),
        productA: ProductA,
        productB: ProductB;

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
}

main();