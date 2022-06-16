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

    //Test the getter methods 
    describe("Getter method, getGithub(), getRole()", () => {

        //Test for getting the github username, getGithub()
        it("Should get the github username, getGithub()", () => {

            //Create test instance 
            const engineer = new Engineer("Lucy", 3, "testEmail@gmail.com", testGithub);

            //Expect to getGithub()
            expect(engineer.getGithub()).toBe(testGithub);
        });

        //Test for getting the role, getRole()
        it("Should get the role, getRole()", () => {

            //Create test instance 
            const engineer = new Engineer("Lucy", 3, "testEmail@gmail.com", "testTest3455", testRole);

            //Expect to getRole()
            expect(engineer.getRole()).toBe("Engineer");
        });
    });
});