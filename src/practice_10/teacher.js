import Person from "../../src/practice_10/person.js";
import Student from "../../src/practice_10/student.js";
import Class from "../../src/practice_10/class.js";
export default class Teacher extends Person{
    constructor(id,name,age,klass){
        super(id,name,age,classes);
        this.klass = klass;
        this.classes = classes;
    }
    classes=[];
    introduce() {
        let cls = this.klass===undefined?`No Class.`:`${this.klass.getDisplayName()}.`;
        // if(isTeaching(student)){
        //     this.classes.push(student.klass.number);
        //     let cls = this.klass===undefined?`No Class.`:`${this.klass.getDisplayName()}.`;
        //     str += `${super.introduce()} I am a Teacher. I teach ${student.name}.`;
        // }else{

        // }
        return `${super.introduce()} I am a Teacher. I teach ${cls}`;
    }
    introduceWith(student){
        if(student.klass.number === this.klass.number){
            str += `${super.introduce()} I am a Teacher. I teach ${student.name}.`
        }else{
            str += `${super.introduce()} I am a Teacher. I don't teach ${student.name}.`
        }
        return str;
    }
    isTeaching(student){
        return student.klass.isIn();
    }
    
}


