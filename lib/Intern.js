//Pass in the Employee class
const Employee = require("./Employee");

//Template for creating Intern objects as a child of the Employee class
class Intern extends Employee {

    //Creates and initializes an object
    constructor(name, id, email, school) {

        //Call super to access the Employee constructor 
        super(name, id, email);

        //Add school roperty for Intern
        this.school = school;
    };

    //Getter for school 
    getSchool() {
        return this.school = school;
    };

    //Getter for role
    getRole() {
        return "Intern";
    };
};

//Export Intern Class
module.exports = Intern;