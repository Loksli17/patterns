"use strict";
class ServiceArray {
    constructor(arr) {
        this.data_ = [];
        this.data_ = arr;
    }
    get max() {
        return this.data_.reduce((prev, current) => Math.max(prev, current));
    }
    get min() {
        return this.data_.reduce((prev, current) => Math.min(prev, current));
    }
    get sum() {
        return this.data_.reduce((prev, current) => prev + current);
    }
    get multiple() {
        return this.data_.reduce((prev, current) => prev * current);
    }
    get data() {
        return this.data_;
    }
    set data(arr) {
        this.data_ = arr;
    }
}
class SeviceObject {
    constructor(obj) {
        this.data_ = {};
        this.data_ = Object.assign(obj);
    }
    get data() {
        return this.data_;
    }
}
class Adapter extends ServiceArray {
    constructor(serviceObj) {
        super([]);
        this.serviceObj_ = serviceObj;
    }
    get sum() {
        return this.data_.concat(Object.values(this.serviceObj_.data)).reduce((prev, current) => prev + current);
    }
    get multiple() {
        return this.data_.concat(Object.values(this.serviceObj_.data)).reduce((prev, current) => prev * current);
    }
    get min() {
        return this.data_.concat(Object.values(this.serviceObj_.data)).reduce((prev, current) => Math.min(prev, current));
    }
    get max() {
        return this.data_.concat(Object.values(this.serviceObj_.data)).reduce((prev, current) => Math.max(prev, current));
    }
}
const main = () => {
    const serviceArray = new ServiceArray([4, 5, 67, 322, 101]);
    console.table({
        max: serviceArray.max,
        min: serviceArray.min,
        sum: serviceArray.sum,
        mul: serviceArray.multiple
    });
    const serviceObj = new SeviceObject({ '0': 5, '1': 2, '2': 4, '3': 8 }), adapter = new Adapter(serviceObj);
    adapter.data = [4, 6, 7, 10, 11];
    console.table({
        max: adapter.max,
        min: adapter.min,
        sum: adapter.sum,
        mul: adapter.multiple,
    });
};
main();
