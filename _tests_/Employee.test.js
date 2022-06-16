//Pass in the Employee Class 
const Employee = require("../lib/Employee");

//Create test case variable for each property 
const testName = "Lucy";
const testId = 4;
const testEmail = "testEmail@gmail.com";
const testRole = "Employee";

//Test cases for Employee class
describe("Employee", () => {

    //Test the employee will be an object and set the constructor argument 
    describe("Initialization", () => {

        //Test case for creating an object
        it("Should create an object with the property of name, id, email, and role", () => {

            //Create a empty test instance 
            const employee = new Employee(testName, testId, testEmail, testRole);

            //Expected outcome should be an object 
            expect(typeof(employee)).toBe("object");
        });

        //Test case for setting name
        it("Should set the name in constructor argument to be name", () => {

            //Create a test instance 
            const employee = new Employee(testName);

            //Expected outcome should be name 
            expect(employee.name).toBe(testName);
        });

        //Test case for setting id 
        it("Should set the id in constructor argument to be id", () => {

            //Create a test instance 
            const employee = new Employee(testName, testId);

            //Expected outsome should be id
            expect(employee.id).toBe(testId);
        });

        //Test case for setting email
        it("Should set the email in constructor argument to be email", () => {

            //Create a test instance 
            const employee = new Employee(testName, testId, testEmail);

            //Expected outsome should be id
            expect(employee.email).toBe(testEmail);
        });
    });

    //Test the getter methods
    describe("Getter Methods, getName(), getId(), getEmail(), getRole()", () => {

        //Test case for getting the name, getName() 
        it("Should get the name of the employee, getName()", () => {

            //Create a test instance 
            const employee = new Employee(testName);

            //Expect to getName()
            expect(employee.getName()).toBe(testName);
        });

        //Test case for getting the id number, getId() 
        it("Should get the id of the employee, getId()", () => {

            //Create a test instance 
            const employee = new Employee(testName, testId);

            //Expect to getId()
            expect(employee.getId()).toBe(testId);
        });

        //Test case for getting the email, getEmail()
        it("Should get the email of the employee, getEmail()", () => {

            //Create a test instance 
            const employee = new Employee(testName, testId, testEmail);

            //Expect to getEmail()
            expect(employee.getEmail()).toBe(testEmail);
        });

        //Test case for getting the role, getRole()
        it("Should get the role of the employee, getRole()", () => {

            //Create a test instance 
            const employee = new Employee(testName, testId, testEmail, testRole);

            //Expect to getRole()
            expect(employee.getRole()).toBe(testRole);
        });
    });
});