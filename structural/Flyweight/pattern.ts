
class TreeType{

    private name   : string = "";
    private color  : string = "";
    private texture: string = "";

    constructor(name: string, color: string, texture: string){
        Object.assign(this, {name: name, color: color, texture: texture});
    }

    public draw(canvas: Object, x: number, y: number){
        console.table(this);
    }

    public equal(anotherObject: {name: string; color: string; texture: string}){
        return JSON.stringify(this) === JSON.stringify(anotherObject);
    }
}


class TreeFactory{
    
    public static treeTypes_: Array<TreeType> = [];

    public static getTreeType(name: string, color: string, texture: string): TreeType{

        console.log('store of TreeType:', this.treeTypes_);

        let tree: TreeType | undefined = this.treeTypes_.find(
            (value: TreeType) => value.equal({name: name, color: color, texture: texture})
        );

        if(tree == undefined) {
            tree = new TreeType(name, color, texture);
            this.treeTypes_.push(tree);
        } 

        return tree;
    }
}


class Tree{
    
    private x: number = 0;
    private y: number = 0;
    private type: TreeType;

    constructor(x: number, y: number, type: TreeType){
        Object.assign(this, {x: x, y: y});
        this.type = type;
    }

    public draw(canvas: Object = {}){
        this.type.draw(canvas, this.x, this.y);
    }
}


class Forest{

    private trees: Array<Tree> = [];

    public plantTree(x: number, y: number, name: string, color: string, texture: string): void{
        const type: TreeType = TreeFactory.getTreeType(name, color, texture);
        this.trees.push(
            new Tree(x, y, type)
        );
    }

    public draw(){
        this.trees.forEach(value => value.draw());
    }
}


const main: Function = () => {

    const forest: Forest = new Forest();
    
    forest.plantTree(322, 228, "name", "red", "kek.png");
    forest.plantTree(322, 228, "name", "green", "kek1.png");
    forest.plantTree(322, 43, "name", "red", "kek.png");

    forest.draw();
}

main();

