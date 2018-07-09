import Person from "../../src/practice_7/person.js";
import Student from "../../src/practice_7/student.js";
import Class from "../../src/practice_7/class.js";
export default class Teacher extends Person{
    constructor(id,name,age,klass){
        super(id,name,age);
        this.klass = klass;
    }
    introduce() {
        let cls = this.klass===undefined?`No Class.`:`${this.klass.getDisplayName()}.`;
        return `${super.introduce()} I am a Teacher. I teach ${cls}`;
    }
    introduceWith(student){
        let str = ``;
        if(student.klass.number === this.klass.number){
            str += `${super.introduce()} I am a Teacher. I teach ${student.name}.`
        }else{
            str += `${super.introduce()} I am a Teacher. I don't teach ${student.name}.`
        }
        return str;
    }
}
