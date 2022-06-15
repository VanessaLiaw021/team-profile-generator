//Template for creating Employee objects 
class Employee {

    //Creates and initalizes an object properties
    constructor(name, id, email) {

        //Add name property
        this.name = name; 
        
        //Add id property
        this.id = id;

        //Add email property
        this.email = email;
    };

    //Getter for name 
    getName() {
        return this.name = name;
    };

    //Getter for id number 
    getId() {
        return this.id = id;
    };

    //Getter for email address 
    getEmail() {
        return this.email = email;
    };

    //Getter for role 
    getRole() {
        return "Employee";
    };
};

//Export Employee Class
module.exports = Employee;