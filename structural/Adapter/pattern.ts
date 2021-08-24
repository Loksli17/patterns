

class ServiceArray{

    private data_: Array<number> = [];

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
}


class SeviceObject{

    private data_: {[index: string]: number} = {};

    constructor(obj: {[index: string]: number}){
        this.data_ = Object.assign(obj);
    }

    public get max(): number{
        return Object.values(this.data_).reduce((prev: number, current: number) => Math.max(prev, current));
    }

    public get min(): number{
        return Object.values(this.data_).reduce((prev: number, current: number) => Math.min(prev, current));
    }

    public get sum(): number{
        return Object.values(this.data_).reduce((prev: number, current: number) => prev + current);
    }

    public get multiple(): number{
        return Object.values(this.data_).reduce((prev: number, current: number) => prev * current);
    }
}


class Adapter extends ServiceArray{

    private serviceObj_: SeviceObject;

    constructor(serviceObj: SeviceObject){
        super([]);
        this.serviceObj_ = serviceObj;
    }

    public 

}


const main: Function = () => {
    
    const serviceArray: ServiceArray = new ServiceArray([4, 5, 67, 322, 101]);

    console.table({
        max: serviceArray.max,
        min: serviceArray.min,
        sum: serviceArray.sum,
        mul: serviceArray.multiple
    });

    const serviceObj: SeviceObject = new SeviceObject({'0': 5, '1': 2, '2': 4, '3': 8});

    console.table({
        max: serviceObj.max,
        min: serviceObj.min,
        sum: serviceObj.sum,
        mul: serviceObj.multiple
    });

}

main();