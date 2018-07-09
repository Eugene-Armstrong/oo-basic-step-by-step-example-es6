import Person from "../../src/practice_8/person.js";
export default class Student extends Person{
    constructor(id,name,age,klass){
        super(id,name,age);
        this.klass = klass;
    }
    isSamePerson(student){
        return student!=undefined&&(student.id === this.id);
    }
    introduce() {
        if(this.klass.leader !== undefined){
            if(this.isSamePerson(this.klass.leader)){
                return `${super.introduce()} I am a Student. I am Leader of ${this.klass.getDisplayName()}.`
            }else{
                return `${super.introduce()} I am a Student. I am at ${this.klass.getDisplayName()}.`
            }
        }else{
            return `${super.introduce()} I am a Student. I am at ${this.klass.getDisplayName()}.`
        }
    }
}
