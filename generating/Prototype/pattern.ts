
/**
 * Shape is base class, whish is PROTOTYPE
 * PROTOTYPE in JS can be realized with Object.assign (Object.assign({}, this)) or Oblect.create 
 */
abstract class Shape{

    private x: number = 1;
    private y: number = 1;

    public clone(): this { return Object.assign({}, this); }

    public getX(): number { return this.x }

    public getY(): number { return this.y }

    public setX(x: number): void { this.x = x }

    public setY(y: number): void { this.y = y }
}

class Rectangle extends Shape{

    private width : number = 1;
    private height: number = 1;
    
    public getWidth(): number { return this.width }

    public getHeight(): number { return this.height } 

    public setWidth(w: number): void { this.width = w }

    public setHeight(h: number): void { this.height = h }
}


class Circle extends Shape{

    private radius: number = 1;

    public getRadius(): number { return this.radius } 

    public setRadius(r: number): void { this.radius = r }
}


const main: Function = () => {
    const test: Rectangle = new Rectangle();
    test.setHeight(6); 
    test.setWidth(7);

    const rect: Rectangle = test.clone();
    test.setWidth(322);

    console.log('test: ');
    console.table(test);

    console.log('rect: ');
    console.table(rect);

    const
        circle     : Circle = new Circle(),
        circleClone: Circle = circle.clone();

    console.log('circle:');
    console.table(circleClone);
}

main();






