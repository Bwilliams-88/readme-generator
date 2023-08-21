// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require ('fs');
const markdown = require('./utils/generateMarkdown.js');
const path = require('path');

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
       message: 'Enter a description for your README.md.',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please describe the installation process.',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please describe what this README.md is being used for.',
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'What are the guidelines for contributing?',
    },
    {
        type: 'input',
        name: 'test',
        message: 'Please explain how to test your README.md file.',
    },
    {
        type: 'list',
        name: 'license',
        message: 'What type of license would you like?',
        choices: ['MIT', 'Apache2.0', 'IBM', 'None'],
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your github username? (Please provide full URL, example: http://github.com/username)',
    },
    {
        type: 'email',
        name: 'email',
        message: 'What is your email address? (OPTIONAL)',
    }
];




// TODO: Create a function to write README file
function writeReadme(content) {
    console.log(content);
    const readmeContent = markdown(content);
    console.log(readmeContent);
    const filePath = path.join('./dist', 'SampleREADME.md');

    fs.writeFile(filePath, readmeContent, (err) => {
    if (err) { 
        console.error('Error writing README:', err);
    } else {
        console.log('README file created successfully.');
    }
    });
};


// TODO: Create a function to initialize app
function init() {
    console.log('App initialized!');
    inquirer
    .prompt(questions)
    .then(answers => {
        writeReadme(answers);
        // console.log(answers);
    })
    .catch(error => {
        console.error('Error:', error);
    });
};


// Function call to initialize app
init();