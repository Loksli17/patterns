"use strict";
class NodeItem {
    constructor(w) {
        this.weight_ = 0;
        this.weight_ = w;
    }
    get weight() { return this.weight_; }
    set weight(w) { this.weight_ = w; }
    ;
}
class Container {
    constructor() { this.nodes = []; }
    get weight() { return this.nodes.map((item) => item.weight).reduce((prev, current) => prev + current); }
    ;
}
const main = () => {
    const containerLvl1N1 = new Container(), containerLvl1N2 = new Container(), containerLvl2N1 = new Container(), containerLvl3N1 = new Container(), containerLvl3N2 = new Container();
    containerLvl1N1.nodes.push(new NodeItem(4), new NodeItem(6), new NodeItem(5)); // => 15
    containerLvl1N2.nodes.push(new NodeItem(1), new NodeItem(2), new NodeItem(3)); // => 6
    containerLvl2N1.nodes.push(containerLvl1N1);
    containerLvl2N1.nodes.push(containerLvl1N2);
    containerLvl2N1.nodes.push(new NodeItem(10), new NodeItem(11)); // => 21 containerLvl2N1: 42
    console.log(containerLvl2N1.weight);
};
main();
