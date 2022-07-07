//Creation of a single function to populate README
const generateMarkdown = data => {
  return `
  <h1>${data.projectTitle}</h1>

  ## Description
  ${data.description}

  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## License
  This applications is coverd by the ${data.license} license.

  ## Contributing
  ${data.contributing}

  ## Tests
  ${data.tests}

  ## Questions
  Find me on GitHub: [${data.username}](https://github.com/${data.username})

  Email me with questions: ${data.email}
  `;
}

// Importing markdown index
module.exports = generateMarkdown;
