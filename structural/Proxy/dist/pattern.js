"use strict";
class Service {
    constructor(name) {
        this.name_ = "";
        Object.assign(this, { name_: name });
    }
    get name() { return this.name_; }
    operations1() { console.log(this); }
    operations2() { console.table(this); }
}
/**
 * ? this class must be more useful then it is realized here.
 * ! For example this class must creates cash data from SERVICE class.
 */
class ProxyService {
    constructor(service) {
        this.service_ = service;
    }
    operations1() { this.service_.operations1(); }
    operations2() { this.service_.operations2(); }
}
const main = () => {
    const service = new Service("ORM"), proxyService = new ProxyService(service);
    proxyService.operations1();
    proxyService.operations2();
};
main();
