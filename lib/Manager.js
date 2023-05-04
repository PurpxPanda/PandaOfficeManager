const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        // super calls the parent constructor
        super(name, id, email);
        this.officeNumber = officeNumber;
    }
    // getOfficeNumber() returns the office number
    getOfficeNumber() {
        return this.officeNumber;
    }
    // getRole() returns "Manager"
    getRole() {
        return "Manager";
    }
}

module.exports = Manager;