
class Facade{

    protected service1_: Service1;
    protected service2_: Service2;

    constructor(service1: Service1 | null = null, service2: Service2 | null = null){
        this.service1_ = service1 || new Service1();
        this.service2_ = service2 || new Service2();
    }

    public doGachi(){
        console.table({
            ser1_1: this.service1_.method1(),
            ser1_2: this.service1_.method2(),
            ser2_1: this.service2_.method1(),
            ser2_2: this.service2_.method2(),
        });
    }
}


class Service1{

    public method1(): string{
        return 'We must pull up our pants';
    }

    public method2(): string{
        return 'Sorry for what?';
    }
}


class Service2{
    
    public method1(): string{
        return 'Hello my fellow brothers';
    }

    public method2(): string{
        return 'three hundreds buuuucks';
    }
}


const main: Function = () => {

    const facade: Facade = new Facade();
    facade.doGachi();
}

main();