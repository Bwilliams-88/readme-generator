// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require ('fs');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What would you like your README file to be titled?',
    },
    {
       type: 'input',
       name: 'description',
       message: 'Enter a description for your README.md',
    },
    {
        type: 'input',
        name: 'installation instructions',
        message: 'Please describe the installation process',
    },
    {
        type: 'input',
        name: 'usage information',
        message: 'Please describe what this README.md is being used for',
    },
    {
        type: 'input',
        name: 'contribution guidelines',
        message: 'What are the guidelines for contributing?',
    },
    {
        type: 'input',
        name: 'test instructions',
        message: 'Please explain how to test your README.md file',
    }
];

// TODO: Create a function to write README file
function writeToFile(README, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
