import Student from "../../src/practice_8/student.js";
export default class Class{
    constructor(number){
        this.number = number;
    }
    leader;
    getDisplayName(){
        return `Class ${this.number}`;
    }
    assignLeader(student){
        if(this.number === student.klass.number){
            this.leader = student;
        }else{
            this.leader = undefined;
        }
    }
}
