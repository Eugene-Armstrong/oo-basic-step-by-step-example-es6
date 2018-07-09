import Student from "../../src/practice_7/student.js";
export default class Class{
    leader;
    constructor(number){
        this.number = number;
    }
    getDisplayName(){
        return `Class ${this.number}`;
    }
    assignLeader(student){
        leader = student.name;
        return this.leader;
    }
}
