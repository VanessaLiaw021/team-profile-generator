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

            //Create a test instance 
            const intern = new Intern("Lucy", 3, "testEmail@gmail.com", testSchool);

            //Expect to be school name 
            expect(intern.school).toBe(testSchool);
        });
    });

    //Test the getter method 
    describe("Getter method, getSchool(), getRole()", () => {

        //Test for getting the school name, getSchool() 
        it("Should get the school name, getSchool()", () => {

            //Create a test instance
            const intern = new Intern("Lucy", 3, "testEmail@gmail.com", testSchool);

            //Expect to getSchool()
            expect(intern.getSchool()).toBe(testSchool);
        });

        //Test for getting the role, getRole()
        it("Should get the role, getRole()", () => {

            //Create a test instance 
            const intern = new Intern("Lucy", 3, "testEmail@gmail.com", "UNCC", testRole);

            //Expect to getRole()
            expect(intern.getRole()).toBe(testRole);
        });
    });
});