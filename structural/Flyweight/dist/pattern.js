"use strict";
class TreeType {
    constructor(name, color, texture) {
        this.name = "";
        this.color = "";
        this.texture = "";
        Object.assign(this, { name: name, color: color, texture: texture });
    }
    draw(canvas, x, y) {
        console.table(this);
    }
    equal(anotherObject) {
        return JSON.stringify(this) === JSON.stringify(anotherObject);
    }
}
class TreeFactory {
    static getTreeType(name, color, texture) {
        console.log('store of TreeType:', this.treeTypes_);
        let tree = this.treeTypes_.find((value) => value.equal({ name: name, color: color, texture: texture }));
        if (tree == undefined) {
            tree = new TreeType(name, color, texture);
            this.treeTypes_.push(tree);
        }
        return tree;
    }
}
TreeFactory.treeTypes_ = [];
class Tree {
    constructor(x, y, type) {
        this.x = 0;
        this.y = 0;
        Object.assign(this, { x: x, y: y });
        this.type = type;
    }
    draw(canvas = {}) {
        this.type.draw(canvas, this.x, this.y);
    }
}
class Forest {
    constructor() {
        this.trees = [];
    }
    plantTree(x, y, name, color, texture) {
        const type = TreeFactory.getTreeType(name, color, texture);
        this.trees.push(new Tree(x, y, type));
    }
    draw() {
        this.trees.forEach(value => value.draw());
    }
}
const main = () => {
    const forest = new Forest();
    forest.plantTree(322, 228, "name", "red", "kek.png");
    forest.plantTree(322, 228, "name", "green", "kek1.png");
    forest.plantTree(322, 43, "name", "red", "kek.png");
    forest.draw();
};
main();
