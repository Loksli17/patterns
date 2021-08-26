"use strict";
class Service {
    constructor(message) {
        this.message_ = "";
        this.message_ = message;
    }
    get request() {
        return this.message_;
    }
}
class ServiceDecorator {
    constructor(service) {
        this.service_ = service;
    }
    /**
     * ! IT MUST BE AGGRIGATION
     */
    get request() {
        return this.service_.request;
    }
}
class UpperLetter extends ServiceDecorator {
    get request() {
        return this.service_.request.toUpperCase();
    }
}
class WordReverse extends ServiceDecorator {
    get request() {
        return this.service_.request.split(' ').reverse().join(' ');
    }
}
const main = () => {
    let serv = new Service('caaaaptain looooooooook');
    serv = new UpperLetter(serv);
    // serv = new WordReverse(serv);
    console.log(serv.request);
};
main();
//! It's decorator in TS
