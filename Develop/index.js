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
            validate: name1Input => {
                if (name1Input) {
                    return true;
                } else {
                    console.log("Please enter your project title.");
                    return false;
                }
            }
        },
        {
            type: "input",
            name1: "description",
            message: "Write a brief description:", 
            validate: name1Input => {
                if (name1Input) {
                    return true;
                } else {
                    console.log("Please enter a description.");
                    return false;
                }
            }
        },
        {
            type: "input",
            name1: "installation",
            message: "Describe the installation process:",
            validate: name1Input => {
                if (name1Input) {
                    return true;
                } else {
                    console.log("Please enter steps required to install.");
                    return false;
                }
            }
        },
        {
            type: "input",
            name1: "usage",
            message: "How do you use this application?:",
            validate: name1Input => {
                if (name1Input) {
                    return true;
                } else {
                    console.log("Please enter a usage description.");
                    return false;
                }
            }
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
            ],
            validate: name1Input => {
                if (name1Input) {
                    return true;
                } else {
                    console.log("Please enter a license.");
                    return false;
                }
            }
        },
        {
            type: "input",
            name1: "contriuting",
            message: "List the contributors:",
            validate: name1Input => {
                if (name1Input) {
                    return true;
                } else {
                    console.log("Please enter contributors.");
                    return false;
                }
            }
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
            validate: name1Input => {
                if (name1Input) {
                    return true;
                } else {
                    console.log("Please enter your GitHub name.");
                    return false;
                }
            }
        },
        {
            type: "input",
            name1: "email",
            message: "Enter your email:",
            validate: name1Input => {
                if (name1Input) {
                    return true;
                } else {
                    console.log("Please enter your email.");
                    return false;
                }
            }
        },
    ]);
}

// Async function to initialize app using util.promisify and prompt user questions
function init() {
    try {
        const answers = await promtpUser();
        const generateReadme = generateMarkdown(answers);
        await writeToFile('./dist/README.md', generateReadme);
        console.log('README successfully created.');
    } catch(err) {
        console.log(err);
    }
}

// Function call to initialize app
init();
