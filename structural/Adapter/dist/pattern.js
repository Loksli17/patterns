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
}
class SeviceObject {
    constructor(obj) {
        this.data_ = {};
        this.data_ = Object.assign(obj);
    }
    get max() {
        return Object.values(this.data_).reduce((prev, current) => Math.max(prev, current));
    }
    get min() {
        return Object.values(this.data_).reduce((prev, current) => Math.min(prev, current));
    }
    get sum() {
        return Object.values(this.data_).reduce((prev, current) => prev + current);
    }
    get multiple() {
        return Object.values(this.data_).reduce((prev, current) => prev * current);
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
    const serviceObj = new SeviceObject({ '0': 5, '1': 2, '2': 4, '3': 8 });
    console.table({
        max: serviceObj.max,
        min: serviceObj.min,
        sum: serviceObj.sum,
        mul: serviceObj.multiple
    });
};
main();
