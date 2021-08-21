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

    public abstract buildStepA(a: number): void;

    public abstract buildStepB(b: number): void;

    public abstract buildStepC(c: number): void;
}

class BuilderA{

    private result: ProductA;

    constructor(){
        this.result = new ProductA();
    }

    public reset(){
        this.result = new ProductA();
    }

    public buildStepA(a: number){
        this.result.a = a;
    }

    public buildStepB(b: number){
        this.result.b = b;
    }

    public buildStepC(c: number){
        this.result.c = c;
    }

    public getResult(): ProductA{
        return this.result;
    }
}

class BuilderB{

    private result: ProductB;

    constructor(){
        this.result = new ProductB();
    }

    public reset(){
        this.result = new ProductB();
    }

    public buildStepA(a: number){
        this.result.a = a;
    }

    public buildStepB(b: number){
        this.result.b = b;
    }

    public buildStepC(c: number){
        this.result.c = c;
    }

    public getResult(): ProductB{
        return this.result;
    }
}


class Director{
    
    public createProductA(builder: Builder): void{
        builder.buildStepA(6);
        builder.buildStepB(4);
        builder.buildStepC(5);
    }

    public createReverseProductA(builder: Builder): void{
        builder.buildStepC(1);
        builder.buildStepA(4);
        builder.buildStepB(5);
    }

    public createProductB(builder: Builder): void{
        builder.buildStepB(5);
        builder.buildStepC(4);
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