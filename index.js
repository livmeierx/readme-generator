// Packages needed for this application and declaring variables
const fs = require('fs');
const inquirer = require('inquirer');
const generatePage = require('./utils/generateMarkdown');

//Function to prompt user questions
const getInfo = () => {
    inquirer.prompt ([
        {
            type: "input",
            name: "projectTitle",
            message: "Type in your project title:",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter your project title.");
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "description",
            message: "Write a brief description:", 
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter a description.");
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "installation",
            message: "Describe the installation process:",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter steps required to install.");
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "usage",
            message: "How do you use this application?:",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter a usage description.");
                    return false;
                }
            }
        },
        {
            type: "list",
            name: "license",
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
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter a license.");
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "contriuting",
            message: "List the contributors:",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter contributors.");
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "tests",
            message: "Is there a test included?:",
        },
        {
            type: "input",
            name: "questions",
            message: "What to do if there's an issue?:",
        },
        {
            type: "input",
            name: "username",
            message: "Enter your GitHub username:",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter your GitHub name.");
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "email",
            message: "Enter your email:",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter your email.");
                    return false;
                }
            }
        }
    ]).then(answers => {
        return generatePage(answers);
    })
    .then(data => {
        return getFile(data);
    })
    .catch(err => {
        console.log(err)
    });
};

// Function to write README
const getFile = data => {
    fs.getFile('./dist/README.md', data, err => {
        if (err) {
            console.log(err);
            return;
        } else {
            console.log("Your README has been created.")
        }
    })
};

// Initalize app
getInfo();