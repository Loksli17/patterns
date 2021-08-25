/**
 * it's is a Abstraction
 * there are i must do operatioins with `implemention` classes
 */
class Canvas{

    public shapes: Array<Shape>;

    constructor(){this.shapes = []}

    public render(){
        this.shapes.forEach((item: Shape) => item.render());
    }
}

/**
 * it's interface for `implemention` classes
 */
abstract class Shape{

    public id    : number                        = 1;
    public coords: Array<{x: number; y: number}> = [];

    constructor(coords: Array<{x: number; y: number}>){this.coords = coords;}

    public render(): void { console.table(this) }
}


class Line extends Shape { }

class Triangle extends Shape { }


const main: Function = (): void => {

    const canvas: Canvas = new Canvas();

    canvas.shapes.push(
        new Line([{x: 5, y: 5}, {x: 6, y: 17}]), 
        new Triangle([{x: 15, y: 25}, {x: 4, y: 24}, {x: 1, y: 2}])
    );

    canvas.render();
}

main();



