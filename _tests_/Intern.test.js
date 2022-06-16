//Pass in the Employee Class 
const Intern = require("../lib/Intern");

//Test case variables 
const testSchool = "UNCC";
const testRole = "Intern";

//Test cases for Intern class
describe("Intern", () => {

    //Test to set the constructor argument
    describe("Initialization", () => {

        //Test for setting school name
        it("Should set the school name in constructor argument to be school name", () => {

            //Create test instance 
            const intern = new Intern("Lucy", 3, "testEmail@gmail.com", testSchool);

            //Expect to be school name 
            expect(intern.school).toBe(testSchool);
        });
    });
});