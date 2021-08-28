
/**
 * it is a base interface for proxy class and real service class
 */
interface ServiceInterface{
    operations1(): void;
    operations2(): void;
}


class Service implements ServiceInterface{

    private name_: string = "";
    
    constructor(name: string){
        Object.assign(this, {name_: name});
    }

    public get name() { return this.name_ }

    operations1() { console.log(this) }

    operations2() { console.table(this) }
}


/**
 * ? this class must be more useful then it is realized here. 
 * ! For example this class must creates cash data from SERVICE class.
 */
class ProxyService implements ServiceInterface{

    private service_:  ServiceInterface;

    constructor(service: ServiceInterface){
        this.service_ = service;
    }

    public operations1() { this.service_.operations1() }

    public operations2() { this.service_.operations2() }
}


const main: Function = () => {

    const 
        service     : Service = new Service("ORM"),
        proxyService: ProxyService = new ProxyService(service);
    
    proxyService.operations1();
    proxyService.operations2();
}

main();