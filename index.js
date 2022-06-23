// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require('fs');
const {generateMarkdown} = require('./utils/generateMarkdown');

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
    type: "list",
    name: "license",
    message: "What license is needed?",
    choices: ['None', 'MIT', 'Apache', 'Boost', 'BDS 3-Clause'],
    validate: (licenseInput) => {
      if (licenseInput)  {
        return true;
      } else {
        console.log("Please enter a license!");
        return false;
      } 
    },
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
const writeToFile = (fileName, data)=> {
    fs.writeFile(fileName, data,function(err) {
        if (err) {
            console.log(err);
        }else{
            console.log("README.md file has been generated")
        }
      
        
    });
};

// TODO: Create a function to initialize app
const init = () => {
    inquirer.prompt(questions)
    .then(function(data){ 
        writeToFile("Readme.md", generateMarkdown(data))
        console.log(data)
    })
    // const userResponses = inquirer.prompt(questions);
    // const markdown = generate(userResponses, userInfo);
    // writeToFile('README.md', markdown);
}

// Function call to initialize app
init();
