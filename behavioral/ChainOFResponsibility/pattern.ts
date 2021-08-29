// ! Here i can write Unit - tests

abstract class Handler{
    public static list: Array<number> = [];
    public abstract handle(n: number): boolean;
}

class DefaultHandler extends Handler{

    private static counter: number = 0;

    public handle(n: number): boolean{

        if(DefaultHandler.counter - Handler.list.length == -1){
            DefaultHandler.counter = 0;
            console.log(`collection:\x1b[32m ${Handler.list}\x1b[37m not includes number \x1b[33m${n} \x1b[37m`);
        }else{
            DefaultHandler.counter++;
        }

        return false;
    }
}

class SequlizeHandler extends Handler{

    private value_  : number = 1;
    private handler_: Handler;
    
    constructor(val: number, handler: Handler){
        super();
        this.value_   = val;
        this.handler_ = handler;
    }

    public handle(n: number){

        if(this.value_ != n){
            return this.handler_.handle(n);
        }

        return true;
    }
}


const main: Function = () => {

    let 
        list : Array<number> = [4, 6, 7, 8, 9, 10, 11, 89],
        range: Array<number> = [-5, 20],
        queue: Handler       = new DefaultHandler();

    Handler.list = list;

    for(let i: number = range[0]; i < range[1]; i++){
        list.forEach((value: number) => {
            if(!queue.handle(i)){
                queue = new SequlizeHandler(value, queue);
            }
        });
    }
}

main();