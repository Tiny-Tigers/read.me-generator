// TODO: Include packages needed for this application
const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is your project called?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Describe the intended funcion of the project'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What command should be used for installation?',
        default: 'npm install'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Is there anything the user needs to know about using the repo?'
    },
    // {
    //     type: 'input',
    //     name: 'license',
    //     message: 'Describe the intended funcion of the project'
    // },
    {
        type: 'input',
        name: 'contributing',
        message: 'is there anything the user needs to know when making a contribution?'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'What command should be used to test the app?',
        default: 'npm test'
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, $(answers)) {
    [
        fileName = 'README.md',
    ]
}

fs.writeFile(fileName, JSON.stringify(answers))
// TODO: Create a function to initialize app
function init() {inquirer.prompt(questions).then((answers) => {

 }

// Function call to initialize app
init();
