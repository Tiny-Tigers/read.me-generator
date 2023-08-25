// TODO: Include packages needed for this application
const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'description',
        message: 'Describe the intended funcion of the project'
    },

    // Installation, 
    // Usage, 
    // License, 
    // Contributing, 
    // Tests,
    // Questions
    
];

inquirer.prompt(questions).then((answers) => {
         console.log(answers)
})
// TODO: Create a function to write README file
function writeToFile(fileName, answers) {[
    fileName = 'README.md',
]}

//fs.writeFile(fileName, JSON.stringify(answers))

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
