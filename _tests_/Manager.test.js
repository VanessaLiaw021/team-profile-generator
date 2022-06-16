//Pass in the Employee Class 
const Manager = require("../lib/Manager");

//Test case variables
const testOfficeNumber = 335;
const testRole = "Manager";

//Test cases for Manager class
describe("Manager", () => {

    //Test to set the constructor argument 
    describe("Initialization", () => {

        //Test for setting the office number
        it("Should set the office number in constructer argumnet to be office number", () => {

            //Create a test instance
            const manager = new Manager("Lucy", 3, "testEmail@gmail.com", testOfficeNumber);

            //Expect to be office number 
            expect(manager.officeNumber).toBe(testOfficeNumber);
        });
    });

    //Test the getter method 
    describe("Getter method, getOfficeNumber(), getRole()", () => {

        //Test for getting the office number, getOfficeNumber()
        it("Should get the office number, getOfficeNumber()", () => {

            //Create a test instance 
            const manager = new Manager("Lucy", 3, "testEmail@gmail.com", testOfficeNumber);

            //Expect to getOfficeNumber()
            expect(manager.getOfficeNumber()).toBe(testOfficeNumber);
        });

        //Test for getting the role, getRole()
        it("Should get the role, getRole()", () => {

            //Create a test instance 
            const manager = new Manager("Lucy", 3, "testEmail@gmail.com", 335, testRole);

            //Expect to getRole()
            expect(manager.getRole()).toBe(testRole);
        });
    });
});