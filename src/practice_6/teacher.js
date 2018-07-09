import Person from "../../src/practice_6/person.js";
export default class Teacher extends Person{
    constructor(name,age,klass){
        super(name,age);
        this.klass = klass;
    }
    introduce() {
        let cls = this.klass==null?`No Class.`:`Class ${this.klass}.`;
        return `${super.introduce()} I am a Teacher. I teach ${cls}`;
    }
}
