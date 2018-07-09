import Person from "../../src/practice_7/person.js";
import Class from "../../src/practice_7/class.js";
export default class Student extends Person{
    constructor(name,age,klass){
        super(name,age);
        this.klass = klass;
    }
    introduce() {
        return `${super.introduce()} I am a Student. I am at ${this.klass.getDisplayName()}.`
    }
}

