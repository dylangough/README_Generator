const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const makeReadme = require("./generateMarkdown");
const writeFileAsync = util.promisify(fs.writeFile);


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

    .then(function (response) {
        console.log(response);
        if (response.license === "Mozilla") {
            response.badge = "[![License MPL 2.0] (https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)"
        }
        if (response.license === "IBM") {
            response.badge = "[![License IPL 1.0] (https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)"
        }
        if (response.license === "M.I.T.") {
            response.badge = "[![License M.I.T.] (https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
        }
        if (response.license === "Nothing") {
            response.badge = { name: "No license" }
        }

        fs.writeFile("autoREADME.md", generateMarkdown(response), function (error) {
            if (error) {
                console.log(error);
                return;
            }
            console.log("PERFECT!!")
        })

    })