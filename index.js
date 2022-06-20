// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require('fs');
const generate = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [{
    type: "input",
    name: "title",
    message: "Enter your project title:"
},
{
    type: "input",
    name: "description",
    message: "Enter your project's description:"
},
{
    type: "type",
    name: "installation",
    message: "Enter the installation instructions:"
},
{
    type: "input",
    name: "usage",
    message: "Enter the project usage:"
},
{
    type: "input",
    name: "contributing",
    message: "Enter contributing parties:"
},
{
    type: "input",
    name: "test",
    message: "Enter your tests:"
},
{
    type: "input",
    name: "license",
    message: "Enter your license:"
},
{
    type: "input",
    name: "badge",
    message: "Enter your badge:"
},
{
    type: "input",
    name: "username",
    message: "Enter your github user name:"
},
{
    type: "input",
    name: "email",
    message: "Enter your email:"
},

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
          return console.log(err);
        }
      
        console.log("README.md file has been generated")
    });
};

// TODO: Create a function to initialize app
function init() {
    const userResponses = inquirer.prompt(questions);
    const markdown = generate(userResponses, userInfo);
    writeToFile('README.md', markdown);
}

// Function call to initialize app
init();
