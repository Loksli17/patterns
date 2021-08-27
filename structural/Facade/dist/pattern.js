"use strict";
class Facade {
    constructor(service1 = null, service2 = null) {
        this.service1_ = service1 || new Service1();
        this.service2_ = service2 || new Service2();
    }
    doGachi() {
        console.table({
            ser1_1: this.service1_.method1(),
            ser1_2: this.service1_.method2(),
            ser2_1: this.service2_.method1(),
            ser2_2: this.service2_.method2(),
        });
    }
}
class Service1 {
    method1() {
        return 'We must pull up our pants';
    }
    method2() {
        return 'Are you sorry for what?';
    }
}
class Service2 {
    method1() {
        return 'Hello my fellow brothers';
    }
    method2() {
        return 'three hundreds buuuucks';
    }
}
const main = () => {
    const facade = new Facade();
    facade.doGachi();
};
main();
