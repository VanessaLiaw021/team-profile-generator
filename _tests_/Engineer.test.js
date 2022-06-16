//Pass in the Employee Class 
const Engineer = require("../lib/Engineer");

//Test case variables
const testGithub = "testTest3455";
const testRole = "Engineer";

//Test cases for Engineer class
describe("Engineer", () => {

    //Test to set the constructor argument 
    describe("Initialization", () => {

        //Test for setting github username
        it("Should set the github username in constructor argument to be github username", () => {

            //Create test instance 
            const engineer = new Engineer("Lucy", 3, "testEmail@gmail.com", testGithub);

            //Expect to be github username 
            expect(engineer.github).toBe(testGithub);
        });
    });
});