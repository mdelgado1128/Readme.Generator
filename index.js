
const inquirer = require('inquirer');
const fs = require('fs');
const path =require('path');
const generateMarkdown = require('./utils/generateMarkdown')

// array of questions for user
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Describe your project.',
  },
  {
    type: 'input',
    name: 'installation',
    message: 'Describe how to install your project.',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'How to use your project.',
  },
  {
    type: 'list',
    name: 'license',
    message: 'WHat type of license will your program use?.',
    choices: ['MIT', 'Apple public source', 'Microsoft Public', 'no license'],
  },
 
];

// function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(path.join(__dirname,fileName), data , (err) =>
      err ? console.log(err) : console.log('Success!')
    );
}

// function to initialize program
function init() {

inquirer
  .prompt(questions)
  .then((response) => {
    const filename = `README.md`; 
    const data = generateMarkdown(response)
    writeToFile(filename, data)
    
  });
}

// function call to initialize program
init();


