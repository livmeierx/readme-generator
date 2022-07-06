// Packages needed for this application and declaring variables
const fs = require('fs');
const inquirer = require('inquirer');
const util = require('util');
const generateMarkdown = require('./utils/generateMarkdown');
const writeToFile = util.promisify(fs.writeFile);

//Function to prompt user questions
function promtpUser () {
    return inquirer.prompt ([
        {
            type: "input",
            name1: "projectTitle",
            message: "Type in your project title:",
        },
        {
            type: "input",
            name1: "description",
            message: "Write a brief description:", 
        },
        {
            type: "input",
            name1: "installation",
            message: "Describe the installation process:",
        },
        {
            type: "input",
            name1: "usage",
            message: "What is the project used for?:",
        },
        {
            type: "list",
            name1: "licesne",
            message: "Choose the correct license:",
            choices: [
                "Apache",
                "Academic",
                "GNU",
                "ISC",
                "MIT",
                "Mozilla",
                "Open"
            ]
        },
        {
            type: "input",
            name1: "contriuting",
            message: "List the contributors:",
        },
        {
            type: "input",
            name1: "tests",
            message: "Is there a test included?:",
        },
        {
            type: "input",
            name1: "questions",
            message: "What to do if there's an issue?:",
        },
        {
            type: "input",
            name1: "username",
            message: "Enter your GitHub username:",
        },
        {
            type: "input",
            name1: "email",
            message: "Enter your email:",
        },
    ]);
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
