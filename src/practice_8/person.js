export default class Person{
    constructor(id,name,age){
        this.id = this.id;
        this.name = name;
        this.age = age;
    }
    introduce() {
        return `My name is ${this.name}. I am ${this.age} years old.`
    }
}
