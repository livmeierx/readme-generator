//Creation of a single function to populate README
function generateMarkdown(answers) {
  return `
  <h1 align="center">${answers.projectTitle}</h1>

  ## Description
  ${answers.description}

  ## Installation
  ${answers.installation}

  ## Usage
  ${answers.usage}

  ## License
  This applications is coverd by the ${answers.license} license.

  ## Contributing
  ${answers.contributing}

  ## Tests
  ${answers.tests}

  ## Questions
  Find me on GitHub: [${answers.username}](https://github.com/${answers.username})

  Email me with questions: ${answers.email}
  `;
}

module.exports = generateMarkdown;
