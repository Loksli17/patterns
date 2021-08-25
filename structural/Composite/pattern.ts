

interface Item{
    weight: number;
}


class NodeItem implements Item{

    private weight_: number = 0;

    constructor(w: number) { this.weight_ = w }

    public get weight(): number { return this.weight_ }

    public set weight(w: number) {this.weight_ = w};
}


class Container implements Item{

    public nodes: Array<Item>;
    
    constructor() { this.nodes = [] }

    public get weight(): number { return this.nodes.map((item: Item) => item.weight).reduce((prev: number, current: number) => prev + current) };
}


const main: Function = (): void => {

    const 
        containerLvl1N1: Container = new Container(),
        containerLvl1N2: Container = new Container(),
        containerLvl2N1: Container = new Container();

    containerLvl1N1.nodes.push(new NodeItem(4), new NodeItem(6), new NodeItem(5)); // => 15
    containerLvl1N2.nodes.push(new NodeItem(1), new NodeItem(2), new NodeItem(3)); // => 6

    containerLvl2N1.nodes.push(containerLvl1N1);
    containerLvl2N1.nodes.push(containerLvl1N2);
    containerLvl2N1.nodes.push(new NodeItem(10), new NodeItem(11)); // => 21 containerLvl2N1: 42

    console.log(containerLvl2N1.weight);
}

main();