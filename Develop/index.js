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
    }
];




// TODO: Create a function to write README file
function writeReadme(content) {
    const readmeContent = `# My Project README\n\n${content}`;

    fs.writeFile('README.md', readmeContent, (err) => {
    if (err) { 
        console.error('Error writing README:', err);
    } else {
        console.log('README file created successfully.');
    }
    });
};


// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt(questions)
    .then(answers => {
        writeReadme();
        console.log(answers);
    })
    .catch(error => {
        console.error('Error:', error);
    });
    console.log('App initialized!');
};


// Function call to initialize app

init();
// writeReadme();