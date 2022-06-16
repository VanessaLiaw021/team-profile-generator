//Pass in the Employee class
const Employee = require("./Employee");

//Template for creating Engineer objects as a child of the Employee class
class Engineer extends Employee {

    //Creates and initializes an object 
    constructor(name, id, email, github) {

        //Call super to access the Employee constructor 
        super(name, id, email);

        //Add github property
        this.github = github;
    };

    //Getter for github 
    getGithub() {
        return this.github;
    };

    //Getter for role 
    getRole() {
        return "Engineer";
    };
};

//Export Engineer Class
module.exports = Engineer;