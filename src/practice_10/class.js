import Student from "../../src/practice_10/student.js";
export default class Class{
    constructor(number){
        this.number = number;
    }
    leader;
    getDisplayName(){
        return `Class ${this.number}`;
    }
    assignLeader(student){
        if(isIn(student)){
            this.leader = student;
        }else{
            this.leader = undefined;
            console.log("It is not one of us.");
        }
    }
    appendMember(student){
        student.klass = this;
    }
    isIn(student){
        return this.number === student.klass.number
    }
}

