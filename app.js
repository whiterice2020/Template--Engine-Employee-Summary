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
// const { endianness } = require("os");

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
                    "No More Employees to add",
                ]
            },
        ]).then(function (answers) {
            if (answers.title === "Manager") {
                addManager();
            } else if (answers.title === "Engineer") {
                addEngineer();
            } else if (answers.title === "Intern") {
                addIntern();
            }
            else if (answers.title === "No More Employees to add") {
                console.log("You have completed adding your employees.");
                fs.writeFile(outputPath, render(employeeArray), (err) => {
                    if (err) {
                        return err;
                    }
                }
                )
            }

            // Manager Questions
            function addManager() {
                inquirer.prompt([
                    {
                        type: "input",
                        name: "managerName",
                        message: "What is the manager's name?",
                    },
                    {
                        type: "input",
                        name: "managerID",
                        message: "What is the managers's ID?",
                    },
                    {
                        type: "input",
                        name: "managerEmail",
                        message: "What is the managers's email?",
                    },
                    {
                        type: "input",
                        name: "managerOfficeNumber",
                        message: "What is the managers's Office Number?",
                    },
                ]).then(function (answers) {
                    const mgr = new Manager(answers.managerName, answers.managerID, answers.managerEmail, answers.managerOfficeNumber);
                    employeeArray.push(mgr);
                    addEmployee();
                });
            }
            // Engineer Questions
            function addEngineer() {
                inquirer
                    .prompt([
                        {
                            type: "input",
                            name: "engineerName",
                            message: "What is the engineer's name?",
                        },
                        {
                            type: "input",
                            name: "engineerID",
                            message: "What is the engineer's ID?",
                        },
                        {
                            type: "input",
                            name: "engineerEmail",
                            message: "What is the engineer's email?",
                        },
                        {
                            type: "input",
                            name: "engineerGitHub",
                            message: "What is the engineer's GitHub Username?",
                        },
                    ]).then(function (answers) {
                        const eng = new Engineer(answers.engineerName, answers.engineerID, answers.engineerEmail, answers.engineerGitHub);
                        employeeArray.push(eng);
                        addEmployee();
                    });
            }
            // Intern Questions
            function addIntern() {
                inquirer
                    .prompt([
                        {
                            type: "input",
                            name: "internName",
                            message: "What is the Intern's name?",
                        },
                        {
                            type: "input",
                            name: "internID",
                            message: "What is the intern's ID?",
                        },
                        {
                            type: "input",
                            name: "internEmail",
                            message: "What is the intern's email?",
                        },
                        {
                            type: "input",
                            name: "internSchool",
                            message: "What is the intern's school they graduated from?",
                        },
                    ]).then(function (answers) {
                        const int = new Intern(answers.internName, answers.internID, answers.internEmail, answers.internSchool);
                        employeeArray.push(int);
                        addEmployee();
                    })
            }

            addEmployee()

    // Write Data
//     function complete() {
//         console.log("You have completed adding your employees.");
//         fs.writeFile(outputPath, render(employeeArray), (err) => {
//             if (err) {
//                 return err;

//         };
//     });
// }
