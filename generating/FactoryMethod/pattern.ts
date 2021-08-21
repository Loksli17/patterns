import readline from 'readline-sync';

/** 
 * * Usually for base type is used INTERFACE, but I try to do it with abstract class (I think this is the best way)
 */
abstract class Product{

    protected name: string;
    protected id  : number;

    constructor(id_: number = 1, name_: string = "name"){
        this.name = name_;
        this.id   = id_;
    }

    public abstract doStuff(): any;
}


class ProductA extends Product{

    private cost: number = 1000;
    
    constructor(id_: number = 1, name_: string = "name", cost_: number = 322){
        super(id_, name_);
        this.cost = cost_;
    }

    public doStuff(): void{
        console.table(this);
    }
}


class ProductB extends Product{

    private weight: number = 1000;
    
    constructor(id_: number = 1, name_: string = "name", weight_: number = 322){
        super(id_, name_);
        this.weight = weight_;
    }

    public doStuff(): void{
        console.log({id: this.id, weight: this.weight});
    }
}


abstract class Creator{
    protected abstract createProduct(): Product;
    
    public doOperations(){
        const p: Product = this.createProduct();
        p.doStuff();
    }
}


class CreatorA extends Creator{

    constructor() { super(); }

    public createProduct(): Product{
        return new ProductA();
    }
}


class CreatorB extends Creator{

    constructor() { super(); }

    public createProduct(): Product{
        return new ProductB();
    }
}



const main: Function = (): void => {
    
    
    let
        creator  : Creator,
        whiteList: Array<string> = ['A', 'B'], 
        answer   : string        = '';

    do{
        answer = readline.question('input type of product: A or B: \n >> ').toUpperCase();
    }while(!whiteList.includes(answer));

    console.log(answer);

    switch (answer){
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
}

main();

