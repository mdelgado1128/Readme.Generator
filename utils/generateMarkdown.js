// function to generate markdown for README

function makeBadge(license){

}


function generateMarkdown(data) {
  return `# ${data.title}
## Description
${data.description}
## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)

## Installation
${data.installation}

## Usage
${data.usage}

## License
${data.license}

`;
}

module.exports = generateMarkdown;
