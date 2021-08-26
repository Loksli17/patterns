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
