"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
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
    /**
     * ! All magic are here
     */
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
    serv = new WordReverse(serv);
    console.log(serv.request);
};
main();
//! It's decorator in TS
const decorators = {
    UpperLetter: () => {
        return (target, propertyKey, descriptor) => {
            console.log(target.message_);
        };
    }
};
class ServiceTS {
    constructor(message) {
        this.message_ = "";
        this.message_ = message;
    }
    get request() {
        return this.message_;
    }
}
__decorate([
    decorators.UpperLetter()
], ServiceTS.prototype, "request", null);
