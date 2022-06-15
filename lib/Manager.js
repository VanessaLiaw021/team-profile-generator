//Pass in the Employee class
const Employee = require("./Employee");

//Template for creating Manager objects as a child of the Employee class
class Manager extends Employee {

    //Creates and initializes an object
    constructor(name, id, email, officeNumber) {

        //Call super to access the Employee constructor 
        super(name, id, email);

        //Add office number property
        this.officeNumber = officeNumber;
    };

    //Getter for office number 
    getOfficeNumber() {
        return this.officeNumber = officeNumber;
    };

    //Getter for role 
    getRole() {
        return "Manager";
    };
};

//Export Manager Class
module.exports = Manager;