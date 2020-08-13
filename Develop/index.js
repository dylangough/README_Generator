const inquirer = require ('inquirer');
const fs = require('fs');
const util = require('util');
const makeReadme = require("./generateMarkdown");


inquirer.prompt([
    {
        type: "input",
        message: "Who are you?!?!",
        name: "name",
    },
    {
        type: "input",
        message: "What is the title of your work?",
        name: "title",
    },
    {
        type: "input",
        message: "What is your Github username?",
        name: "gitUser",
    },
    {
        type: "input",
        message: "What does your project do exactly?",
        name: "description",
    },
    {
        type: "input",
        message: "What are your installation instructions for this project?",
        name: "install",
    },
    {
        type: "input",
        choices: ["Mozilla", "IBM", "MIT", "Apache", "Nothing"],
        message: "What license are you going to use for this?",
        name: "license"
    },
    {
        type: "input",
        message: "How do you feel about contributing?",
        name: "contributions",
    },
])

fs.writeFile("autoREADME.md", generateMarkdown(response), function(error){
    if (error) {
        console.log(error);
        return;
    }
    console.log("PERFECT!!")
})