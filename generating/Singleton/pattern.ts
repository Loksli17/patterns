
class Singleton{

    public static instance: Singleton;

    private constructor(){
        // do smth..
    }

    public static get Instance(): Singleton{
        return this.instance || (this.instance = new this());
    }
}

const single: Singleton = Singleton.Instance;