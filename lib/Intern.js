const Employee = require("./Employee");

class Intern extends Employee {
    constructor(name, id, email, school) {
        // super calls the parent constructor
        super(name, id, email);
        this.school = school;
    }
    // getSchool() returns the school
    getSchool() {
        return this.school;
    }
    // getRole() returns "Intern"
    getRole() {
        return "Intern";
    }
}

module.exports = Intern;