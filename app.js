// Sub Classes
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
// Dependancies
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
// Others
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");
const employeeArray = [];
const render = require("./lib/htmlRenderer");
const { endianness } = require("os");

// Questions to employee title
function addEmployee() {
    inquirer
        .prompt([
            {
                type: "list",
                name: "title",
                message: "Choose the job title for the employee you are adding",
                choices: [
                    "Manager",
                    "Engineer",
                    "Intern",
                ]
            };
        ]).then function answers() {
        if (answers.name === "Manager") {
            addManager();
        } else if (answers.name === "Engineer") {
            addEngineer();
        } else if (answers.name === "Intern") {
            addIntern();
        } else {
            complete();
        }
    }
}

// Manager Questions
function addManager() {
    inquirer.prompt([
        {
            type: "input",
            name: "managerName",
            message: "What is the manager's name?"
        },
        {
            type: "input",
            name: "managerID",
            message: "What is the managers's ID?"
        },
        {
            type: "input",
            name: "managerEmail",
            message: "What is the managers's email?"
        },
        {
            type: "input",
            name: "managerOfficeNumber",
            message: "What is the managers's email?"
        },
    ])
}

// Engineer Questions
function addEngineer() {

}
// Intern Questions
function addIntern() {

}




// inquirer.prompt(initialQuestion);


// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```



