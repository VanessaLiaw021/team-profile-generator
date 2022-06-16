//Pass in the required packages 
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
        const createManager = new Manager (response.name, response.id, response.email, response.officeNumber);

        //Push the manager instance to the array 
        teamMembers.push(createManager);

        //Call the function to prompt the user with a menu selection 
        promptMenuSelection(); 
    });
};