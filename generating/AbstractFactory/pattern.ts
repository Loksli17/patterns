import readline from 'readline-sync';


// ! ProductA
abstract class ProductA{

    protected name: string;
    protected id  : number;

    constructor(name_: string = "name", id_: number = 1){
        this.id   = id_;
        this.name = name_; 
    }

    public abstract info(): void;
}

class ProductA1 extends ProductA{

    private cost: number;

    constructor(name_: string = "name", id_: number = 1, cost_: number = 322){
        super(name_, id_);
        this.cost = cost_;
    }

    public info(){
        console.table(this);
    }
}

class ProductA2 extends ProductA{

    private weight: number;

    constructor(name_: string = "name", id_: number = 1, weight_: number = 322){
        super(name_, id_);
        this.weight = weight_;
    }

    public info(){
        console.log(this);
    }
}


// ! ProductB
abstract class ProductB{
    
    protected code: string;
    protected id  : number;

    constructor(code_: string = "#322&228", id_ = 1){
        this.id   = id_;
        this.code = code_; 
    }

    abstract get data(): ProductB;
}

class ProductB1 extends ProductB{
    
    private cost: number;
    
    constructor(code_: string = "#322&228", id_ = 1, cost_: number = 228){
        super(code_, id_)
        this.cost = cost_;
    }

    public get data(): ProductB1{
        return this;
    }
}

class ProductB2 extends ProductB{

    private weight: number;

    constructor(code_: string = "#322&228", id_ = 1, weight_: number = 322){
        super();
        this.weight = weight_;
    }

    public get data(): ProductB2{
        return this;
    }
}


// ! Factory
abstract class Factory{

    public abstract createProductA(): ProductA;
    public abstract createProductB(): ProductB;

    public doOperations(){
        
        const collection: {A: ProductA; B: ProductB} = {
            A: this.createProductA(),
            B: this.createProductB(),
        }

        collection.A.info();
        console.info(`B - data: ${collection.B.data}`);
    }
}


class Factory1 extends Factory{

    public createProductA(): ProductA{
        return new ProductA1();
    }

    public createProductB(): ProductB{
        return new ProductB1();
    }
}

class Factory2 extends Factory{

    public createProductA(): ProductA{
        return new ProductA2();
    }

    public createProductB(): ProductB{
        return new ProductB2();
    }
}


const main: Function = (): void => {

    let
        factory  : Factory,
        whiteList: Array<string> = ['1', '2'], 
        answer   : string        = '';

    do{
        answer = readline.question('input type of product`s collection: 1 or 2: \n >> ');
    }while(!whiteList.includes(answer));

    console.log(answer);

    switch (answer){
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
}

main();