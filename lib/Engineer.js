const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name, id, email, github) {
        // super calls the parent constructor
        super(name, id, email);
        this.github = github;
    }
    // getGithub() returns the github username
    getGithub() {
        return this.github;
    }
    // getRole() returns "Engineer"
    getRole() {
        return "Engineer";
    }
}

module.exports = Engineer;