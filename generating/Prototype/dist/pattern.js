"use strict";
/**
 * Shape is base class, whish is PROTOTYPE
 * PROTOTYPE in JS can be realized with Object.assign (Object.assign({}, this)) or Oblect.create
 */
class Shape {
    constructor() {
        this.x = 1;
        this.y = 1;
    }
    clone() { return Object.assign({}, this); }
    getX() { return this.x; }
    getY() { return this.y; }
    setX(x) { this.x = x; }
    setY(y) { this.y = y; }
}
class Rectangle extends Shape {
    constructor() {
        super(...arguments);
        this.width = 1;
        this.height = 1;
    }
    getWidth() { return this.width; }
    getHeight() { return this.height; }
    setWidth(w) { this.width = w; }
    setHeight(h) { this.height = h; }
}
class Circle extends Shape {
    constructor() {
        super(...arguments);
        this.radius = 1;
    }
    getRadius() { return this.radius; }
    setRadius(r) { this.radius = r; }
}
const main = () => {
    const test = new Rectangle();
    test.setHeight(6);
    test.setWidth(7);
    const rect = test.clone();
    test.setWidth(322);
    console.log('test: ');
    console.table(test);
    console.log('rect: ');
    console.table(rect);
    const circle = new Circle(), circleClone = circle.clone();
    console.log('circle:');
    console.table(circleClone);
};
main();
