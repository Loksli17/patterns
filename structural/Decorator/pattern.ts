// ! It's base method for all OOP languages
interface ServiceInterface{
    request : string;
}


class Service implements ServiceInterface{

    private message_: string = "";

    constructor(message: string){
        this.message_ = message;
    }

    public get request(): string{
        return this.message_;
    }
}


abstract class ServiceDecorator implements ServiceInterface{

    protected service_: ServiceInterface;

    /**
     * ! All magic are here
     */
    constructor(service: ServiceInterface){
        this.service_ = service;
    }

    /**
     * ! IT MUST BE AGGRIGATION
     */
    public get request(){
        return this.service_.request;
    }
}


class UpperLetter extends ServiceDecorator{

    public get request(): string{
        return this.service_.request.toUpperCase();
    }
} 

class WordReverse extends ServiceDecorator{

    public get request(): string{
        return this.service_.request.split(' ').reverse().join(' ');
    }
}


const main: Function = () => {

    let serv: ServiceInterface = new Service('caaaaptain looooooooook');

    serv = new UpperLetter(serv);
    serv = new WordReverse(serv);

    console.log(serv.request);
}

main();


//! It's decorator in TS
const decorators = {
    
    UpperLetterMethod: () => {
        return (target: Object, propertyKey: string, descriptor: PropertyDescriptor) => {

            const method = descriptor.value;

            descriptor.value = function(...args: any[]){
                let value = method.apply(this, args);
                return value.toUpperCase();
            }

            return descriptor;
        }
    },

    UpperLetter: () => {
        return function(target: Object, propertyKey: string, descriptor: PropertyDescriptor){
        
            const get = descriptor.get!;

            descriptor.get = function(){
                const val: string = get.call(this);
                return val.toUpperCase();
            }
        }
    },

    WordReverse: () => {
        return function(target: Object, propertyKey: string, descriptor: PropertyDescriptor){
            const get = descriptor.get!;

            descriptor.get = function(){
                const val: string = get.call(this);
                return val.split(' ').reverse().join(' ');
            }
        }
    }
}


class ServiceTS implements ServiceInterface{
    private message_: string = "";

    constructor(message: string){
        this.message_ = message;
    }

    @decorators.UpperLetter()
    @decorators.WordReverse()
    public get request(): string{
        return this.message_;
    }

    @decorators.UpperLetterMethod()
    public kek(): string{
        return this.message_;
    }
}


const test: ServiceTS = new ServiceTS('it really kek');
console.log(test.request);