// Application packages
const fs = require('fs'); 
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// Array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the name of your project?',
        name: 'title'
    }, 
    {
        type: 'input',
        message: 'What\'s your project\'s description?',
        name: 'description'
    },
    {
        type: 'input', 
        message: 'What\'re the installation instructions a user needs to follow to use your app?',
        name: 'installation'
    },
    {
        type: 'input',
        message: 'What instructions does a user have to follow to use your app? (i.e., how do you use your app?)',
        name: 'usage'
    },
    {
        type: 'list',
        message: 'How many people (including yourself) worked on this project?',
        choices: ['1', '2', '3', '4', '5'],
        name: 'numContributers'
    },
    {
        type: 'input',
        message: 'What\'s your name?',
        name: 'myName'
    },
    {
        type: 'input',
        message: 'What\'s the name of the next contributer? (If N/A, please click ENTER or RETURN.)',
        name: 'contributer1'
    },
    {
        type: 'input',
        message: 'What\'s the name of the next contributer? (If N/A, please click ENTER or RETURN.)',
        name: 'contributer2'
    },
    {
        type: 'input',
        message: 'What\'s the name of the next contributer? (If N/A, please click ENTER or RETURN.)',
        name: 'contributer3'
    },
    {
        type: 'input',
        message: 'What\'s the name of the next contributer? (If N/A, please click ENTER or RETURN.)',
        name: 'contributer4'
    },
    {
        type: 'input',
        message: 'Please provide tests for your application and a brief explanation on how to perform them. (If N/A, please click ENTER or RETURN.)',
        name: 'tests'
    },
    {
        type: 'list',
        message: 'What licenses would you like to include in your README?',
        choices: [
            'MIT License',
            'GNU General Public License v3.0',
            'Apache License v2.0',
            'Unlicense',
            'none'
        ],
        name: 'license'
    },
    {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'gitHubUser'
    },
    {
        type: 'input',
        message: 'What is your email?',
        name: 'email'
    }
];

// Function for creating filename 
function fileName(data) {
    let str = data.title; 

    // revert data.title to appropriate file name format
    return str = str.toLowerCase().split(' ').join().replace(',', '-');
}

// Function to write README file
function writeToFile(data) {
    // console.log("Seems to be working!")
    const generate = generateMarkdown(data);

    const writeFileFunction = fs.writeFile(`${fileName(data)}-README.md`, generate, (err) =>
        err ? console.log(err) : console.log(data, `\nSuccessfully created ${fileName(data)}-README!`));
    
    writeFileFunction;
}

// Function to initialize app
async function init() {
    inquirer.prompt(questions)
        .then(writeToFile)
        .catch((err) => console.log(err));
}

// Function call to initialize app
init();

module.exports = questions; 