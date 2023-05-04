const inquirer = require('inquirer');
const fs = require('fs');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const teamMembers = [];
const generateHTML = require('./src/template.js');

// function to start the app
const startApp = () => {
    console.log("Welcome to the Team Profile Generator!")
    
    const addManager = () => {
        inquirer
            .prompt([
                {
                    type: 'input',
                    name: 'manName',
                    message: "What is the team manager's name?",
                    validate: nameInput => {
                        if (nameInput) {
                            return true;
                        } else {
                            console.log("Please enter the team manager's name!");
                            return false;
                        }
                    }
                },
                
                {
                    type: 'input',
                    name: 'manId',
                    message: "What is the team manager's employee ID?",
                    validate: idInput => {
                        if (idInput) {
                            return true;
                        } else {
                            console.log("Please enter the team manager's employee ID!");
                            return false;
                        }
                    }
                },

                {
                    type: 'input',
                    name: 'manEmail',
                    message: "What is the team manager's email address?",
                    validate: emailInput => {
                        if (emailInput) {
                            return true;
                        } else {
                            console.log("Please enter the team manager's email address!");
                            return false;
                        }
                    }
                },
                  
                {
                    type: 'input',
                    name: 'manOffice',
                    message: "What is the team manager's office number?",
                    validate: officeInput => {
                        if (officeInput) {
                            return true;
                        } else {
                            console.log("Please enter the team manager's office number!");
                            return false;
                        }
                    }
                }
            ])

            .then(answers => {

                const manager = new Manager(answers.manName, answers.manId, answers.manEmail, answers.manOffice);
                teamMembers.push(manager);
                teamBuilder()
            })
    }
    //continue to add team members or finish building team

    const teamBuilder = () => {
        inquirer
            .prompt([
                {
                    type: 'list',
                    name: 'memberChoice',
                    message: "Would you like to add another team member?",
                    choices: [
                        'Add an engineer',
                        'Add an intern',
                        'Finish building team']
                }
            ])
            .then(userChoice => {
                if (userChoice.memberChoice === 'Add an engineer') {
                    addEngineer();
                }
                if (userChoice.memberChoice === 'Add an intern') {
                    addIntern();
                }
                if (userChoice.memberChoice === 'Finish building team') {
                    console.log("Your team has been built!")
                    fs.writeFileSync('./dist/index.html', generateHTML(teamMembers))
                }

            })
    }

    //add engineer

    const addEngineer = () => {
        inquirer
            .prompt([
                {
                    type: 'input',
                    name: 'engName',
                    message: "What is the engineer's name?",
                    validate: nameInput => {
                        if (nameInput) {
                            return true;
                        } else {
                            console.log("Please enter the engineer's name!");
                            return false;
                        }
                    }
                },
                
                {
                    type: 'input',
                    name: 'engId',
                    message: "What is the engineer's employee ID?",
                    validate: idInput => {
                        if (idInput) {
                            return true;
                        } else {
                            console.log("Please enter the engineer's employee ID!");
                            return false;
                        }
                    }
                },

                {
                    type: 'input',
                    name: 'engEmail',
                    message: "What is the engineer's email address?",
                    validate: emailInput => {
                        if (emailInput) {
                            return true;
                        } else {
                            console.log("Please enter the engineer's email address!");
                            return false;
                        }
                    }
                },
                  
                {
                    type: 'input',
                    name: 'engGithub',
                    message: "What is the engineer's GitHub username?",
                    validate: githubInput => {
                        if (githubInput) {
                            return true;
                        } else {
                            console.log("Please enter the engineer's GitHub username!");
                            return false;
                        }
                    }
                }
            ])

            .then(answers => {

                const engineer = new Engineer(answers.engName, answers.engId, answers.engEmail, answers.engGithub);
                teamMembers.push(engineer);
                teamBuilder()
            })
    }

    //add intern

    const addIntern = () => {
        inquirer
            .prompt([
                {
                    type: 'input',
                    name: 'intName',
                    message: "What is the intern's name?",
                    validate: nameInput => {
                        if (nameInput) {
                            return true;
                        } else {
                            console.log("Please enter the intern's name!");
                            return false;
                        }
                    }
                },
                
                {
                    type: 'input',
                    name: 'intId',
                    message: "What is the intern's employee ID?",
                    validate: idInput => {
                        if (idInput) {
                            return true;
                        } else {
                            console.log("Please enter the intern's employee ID!");
                            return false;
                        }
                    }
                },

                {
                    type: 'input',
                    name: 'intEmail',
                    message: "What is the intern's email address?",
                    validate: emailInput => {
                        if (emailInput) {
                            return true;
                        } else {
                            console.log("Please enter the intern's email address!");
                            return false;
                        }
                    }
                },
                  
                {
                    type: 'input',
                    name: 'intSchool',
                    message: "What is the intern's school?",
                    validate: schoolInput => {
                        if (schoolInput) {
                            return true;
                        } else {
                            console.log("Please enter the intern's school!");
                            return false;
                        }
                    }
                }
            ])

            .then(answers => {

                const intern = new Intern(answers.intName, answers.intId, answers.intEmail, answers.intSchool);
                teamMembers.push(intern);
                teamBuilder()
            })
    }

    addManager();
}

startApp()