export default class Person {
    constructor(name,age){
        super()
        this.name = name;
        this.age = age
    }
    static sayHi(){
        console.log("hi")
    }
    sayName(){
        console.log(`我的名字叫${this.name}`)
    }
}