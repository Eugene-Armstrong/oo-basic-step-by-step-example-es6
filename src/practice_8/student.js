import Person from "../../src/practice_7/person.js";
import Class from "../../src/practice_7/class.js";
export default class Student extends Person{
    constructor(id,name,age,klass){
        super(id,name,age);
        this.klass = klass;
    }
    introduce() {
        return `${super.introduce()} I am a Student. I am at Class ${this.klass.number}.`
    }
}
