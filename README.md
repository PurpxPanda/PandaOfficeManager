# Panda Office Manager

## Installation
To install this application, clone the repository and run npm install to install the necessary dependencies, including Inquirer version 8.2.4.

## Usage
To run the application, use the following command:
node index.js
The application will prompt you for information about each employee, including their name, ID, email address, and role on the team (Manager, Engineer, or Intern). Depending on their role, you may also be prompted for additional information such as their office number or GitHub username.
Once you have entered information for all of the employees on the team, the application will generate an HTML file called team.html in the output directory. This file will display a summary for each employee, including their name, role, ID, email address, and any additional information specific to their role.

## Testing
This application includes unit tests for each part of the code. To run the tests, use the following command: npx jest This will run all of the tests in the tests directory and ensure that they all pass.

## Contributing
If you would like to contribute to this project, please fork the repository and create a new branch for your changes. When you are ready, submit a pull request explaining the changes you have made and why they are necessary.

## License
This project is licensed under the MIT license
