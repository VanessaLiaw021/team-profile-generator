//Pass in the required packages 
const { create } = require("domain");
const fs = require("fs");
const inquirer = require("inquirer");

//Pass in the required classes 
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

//Passed in the html template 
const generateTeams = require("./src/template");

//Store user input in the array 
let teamMembers = [];

//Function that prompt user for manager questions 
const promptManager = () => {

    //Create an array of objects to ask manager require information 
    const managerQuestions = [
        {
            //Question for manager's name 
            type: "input", 
            name: "name",
            message: "What is the team manager's name?"
        },
        {
            //Question for manager's id number
            type: "input",
            name: "id", 
            message: "What is the team manager's id number?"
        },
        {
            //Questions for manager's email address 
            type: "input",
            name: "email", 
            message: "What is the team manager's email address?"
        },
        {
            //Questions for manager's office number
            type: "input", 
            name: "officeNumber",
            message: "What is the team manager's office number?"
        }
    ];

    //Prompt user for manager questions, then create an manager instance, push to array and call the next prompted question 
    inquirer.prompt(managerQuestions).then(response => {

        //Create the manager instance 
        const createManager = new Manager(response.name, response.id, response.email, response.officeNumber);

        //Push the manager instance to the array 
        teamMembers.push(createManager);

        //Call the function to prompt the user with a menu selection 
        promptMenuSelection(); 
    });
};

//Function that prompt user for a menu selection 
const promptMenuSelection = () => {

    //Create an array of objects to ask for a menu selection 
    const menuSelectionQuestion = [
        {
            //Question for choosing if they want to add an engineer, intern, or finish building team
            type: "list",
            name: "menu",
            message: "Who would you like to add next or Are your finish building your team?",
            choices: ["Engineer", "Intern", "Finish Building my Team"]
        }
    ];

    //Prompt user for menu selection, then takes user to the correct prompt question or generate the html page
    inquirer.prompt(menuSelectionQuestion).then(response => {

        //Check to see what to display next based on user choices 
        if (response.menu === "Engineer") {

            //Call the function to prompt engineer questions 
            promptEngineer();

        } else if (response.menu === "Intern") {

            //Call the function to prompt intern questions
            promptIntern();

        } else {

            //Create the filename 
            const fileName = "./dist/index.html";

            //Call the function to generate the html page
            writeToFile(fileName, generateTeams(teamMembers));
        }
    });
};

//Function that prompt user for engineer questions
const promptEngineer = () => {

    //Create an array of objects to ask engineer require information 
    const engineerQuestions = [
        {
            //Question for engineer's name 
            type: "input",
            name: "name",
            message: "What is the team engineer's name?"
        },
        {
            //Question for engineer's id number
            type: "input", 
            name: "id", 
            message: "What is the team engineer's id number?"
        },
        {
            //Question for engineer's email address
            type: "input", 
            name: "email", 
            message: "What is the team engineer's email address?"
        },
        {
            //Question for engineer's github username 
            type: "input", 
            name: "github", 
            message: "What is the team engineer's github username?"
        }
    ];

    //Prompt user for engineer questions, then create an engineer instance, push to array and call the next prompted question  
    inquirer.prompt(engineerQuestions).then(response => {

        //Create the engineer instance 
        const createEngineer = new Engineer(response.name, response.id, response.email, response.github);

        //Push the engineer instance to the array 
        teamMembers.push(createEngineer);

        //Call the function to prompt the user with a menu selection
        promptMenuSelection();
    });
};

//Function that prompt the user for intern questions
const promptIntern = () => {

    //Create an array of objects to ask intern required information 
    const internQuestions = [
        {
            //Question for intern's name 
            type: "input", 
            name: "name", 
            message: "What is the team intern's name?"
        },
        {
            //Question for intern's id number 
            type: "input", 
            name: "id",
            message: "What is the team intern's id number?"
        },
        {
            //Question for intern's email address 
            type: "input", 
            name: "email", 
            message: "What is the team intern's email address?"
        },
        {
            //Question for intern's school name
            type: "input", 
            name: "school",
            message: "What school is the team intern's attending at?"
        }
    ];

    //Prompt user for intern questions, then create an intern instance, push to array and call the next prompted question 
    inquirer.prompt(internQuestions).then(response => {

        //Create the intern instance 
        const createIntern = new Intern(response.name, response.id, response.email, response.school);

        //Push the intern instance to the array 
        teamMembers.push(createIntern);

        //Call the function to prompt the user with a menu selection
        promptMenuSelection();
    });
};

//Function for initialize app 
const init = () => {

    //Call the function to first generate the team Manager information when application starts 
    promptManager();
};

//Call the initalize function
init();