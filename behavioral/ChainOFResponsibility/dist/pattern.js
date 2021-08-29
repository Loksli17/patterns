"use strict";
// ! Here i can write Unit - tests
class Handler {
}
Handler.list = [];
class DefaultHandler extends Handler {
    handle(n) {
        if (DefaultHandler.counter - Handler.list.length == -1) {
            DefaultHandler.counter = 0;
            console.log(`collection:\x1b[32m ${Handler.list}\x1b[37m not includes number \x1b[33m${n} \x1b[37m`);
        }
        else {
            DefaultHandler.counter++;
        }
        return false;
    }
}
DefaultHandler.counter = 0;
class SequlizeHandler extends Handler {
    constructor(val, handler) {
        super();
        this.value_ = 1;
        this.value_ = val;
        this.handler_ = handler;
    }
    handle(n) {
        if (this.value_ != n) {
            return this.handler_.handle(n);
        }
        return true;
    }
}
const main = () => {
    let list = [4, 6, 7, 8, 9, 10, 11, 89], range = [-5, 20], queue = new DefaultHandler();
    Handler.list = list;
    for (let i = range[0]; i < range[1]; i++) {
        list.forEach((value) => {
            if (!queue.handle(i)) {
                queue = new SequlizeHandler(value, queue);
            }
        });
    }
};
main();
