"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
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
    UpperLetterMethod: () => {
        return (target, propertyKey, descriptor) => {
            const method = descriptor.value;
            descriptor.value = function (...args) {
                let value = method.apply(this, args);
                return value.toUpperCase();
            };
            return descriptor;
        };
    },
    UpperLetter: () => {
        return function (target, propertyKey, descriptor) {
            const get = descriptor.get;
            descriptor.get = function () {
                const val = get.call(this);
                return val.toUpperCase();
            };
        };
    },
    WordReverse: () => {
        return function (target, propertyKey, descriptor) {
            const get = descriptor.get;
            descriptor.get = function () {
                const val = get.call(this);
                return val.split(' ').reverse().join(' ');
            };
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
    kek() {
        return this.message_;
    }
}
__decorate([
    decorators.UpperLetter(),
    decorators.WordReverse(),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [])
], ServiceTS.prototype, "request", null);
__decorate([
    decorators.UpperLetterMethod(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], ServiceTS.prototype, "kek", null);
const test = new ServiceTS('it really kek');
console.log(test.request);
