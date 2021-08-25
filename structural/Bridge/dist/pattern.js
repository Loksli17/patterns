"use strict";
/**
 * it's is a Abstraction
 * there are i must do operatioins with `implemention` classes
 */
class Canvas {
    constructor() { this.shapes = []; }
    render() {
        this.shapes.forEach((item) => item.render());
    }
}
/**
 * it's interface for `implemention` classes
 */
class Shape {
    constructor(coords) {
        this.id = 1;
        this.coords = [];
        this.coords = coords;
    }
    render() { console.table(this); }
}
class Line extends Shape {
}
class Triangle extends Shape {
}
const main = () => {
    const canvas = new Canvas();
    canvas.shapes.push(new Line([{ x: 5, y: 5 }, { x: 6, y: 17 }]), new Triangle([{ x: 15, y: 25 }, { x: 4, y: 24 }, { x: 1, y: 2 }]));
    canvas.render();
};
main();
