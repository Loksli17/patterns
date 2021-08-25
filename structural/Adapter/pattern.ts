

class ServiceArray{

    protected data_: Array<number> = [];

    constructor(arr: Array<number>){
        this.data_ = arr;
    }

    public get max(): number{
        return this.data_.reduce((prev: number, current: number) => Math.max(prev, current));
    }

    public get min(): number{
        return this.data_.reduce((prev: number, current: number) => Math.min(prev, current));
    }

    public get sum(): number{
        return this.data_.reduce((prev: number, current: number) => prev + current);
    }

    public get multiple(): number{
        return this.data_.reduce((prev: number, current: number) => prev * current);
    }

    public get data(): Array<number>{
        return this.data_;
    }

    public set data(arr: Array<number>){
        this.data_ = arr;
    }
}


class SeviceObject{

    private data_: {[index: string]: number} = {};

    constructor(obj: {[index: string]: number}){
        this.data_ = Object.assign(obj);
    }

    public get data(): {[index: string]: number}{
        return this.data_;
    }
}


class Adapter extends ServiceArray{

    private serviceObj_: SeviceObject;

    constructor(serviceObj: SeviceObject){
        super([]);
        this.serviceObj_ = serviceObj;
    }

    public get sum(): number{
        return this.data_.concat(Object.values(this.serviceObj_.data)).reduce((prev: number, current: number) => prev + current) 
    }

    public get multiple(): number{
        return this.data_.concat(Object.values(this.serviceObj_.data)).reduce((prev: number, current: number) => prev * current) 
    }

    public get min(): number{
        return this.data_.concat(Object.values(this.serviceObj_.data)).reduce((prev: number, current: number) => Math.min(prev, current))
    }

    public get max(): number{
        return this.data_.concat(Object.values(this.serviceObj_.data)).reduce((prev: number, current: number) => Math.max(prev, current))
    }

}


const main: Function = () => {
    
    const serviceArray: ServiceArray = new ServiceArray([4, 5, 67, 322, 101]);

    console.table({
        max: serviceArray.max,
        min: serviceArray.min,
        sum: serviceArray.sum,
        mul: serviceArray.multiple
    });

    const 
        serviceObj: SeviceObject = new SeviceObject({'0': 5, '1': 2, '2': 4, '3': 8}),
        adapter   : Adapter      = new Adapter(serviceObj);

    adapter.data = [4, 6, 7, 10, 11];

    console.table({
        max: adapter.max,
        min: adapter.min,
        sum: adapter.sum,
        mul: adapter.multiple,
    });
}

main();