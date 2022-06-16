//Create the outline of the html page
const createMarkupHTML = (markup) => {
    return (`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet"  href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css"/>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"/>
    <link rel="stylesheet" href="style.css">
    <title>My Team Members</title>
</head>
<body>

    <!--Heading-->
    <header class="bg-danger p-4">
        <h1 class="text-center text-light">My Team Members</h1>
    </header>

    <!--Display each card of each user input-->
    <div class="container d-flex flex-wrap justify-content-center align-items-center mt-5">
        ${generateTeams(markup)}
    </div>
</body>
</html>
    `);
};

//Create each card for each user inputted
const generateTeams = (teamData) => {

    //Create an empty to push the html card to store  
    const teamResults = [];

    //Function that create the manager's card
    const createManagerCard = (manager) => {

        //Layout of the manager card
        const managerCard = `
        <!--Card for manager-->
        <div class="card m-3 bg-light" style="width: 18rem;">
            <div class="card-header bg-primary text-light">
                <h2 class="text-center pt-2">${manager.getName()}</h2>
                <h3 class="text-center"><i class="fa-solid fa-mug-hot"></i>${manager.getRole()}</h3>
            </div>
            <ul class="list-group list-group-flush p-3">
                <li class="list-group-item border">ID: ${manager.getId()}</li>
                <li class="list-group-item border">Email: <a href="mailto: ${manager.getEmail()}" target="_blank">${manager.getEmail()}</a></li>
                <li class="list-group-item border">Office Number: ${manager.getOfficeNumber()}</li>
            </ul>
        </div>
        `;

        //Push the manager card the array
        teamResults.push(managerCard);
    };

    //Create card for engineer
    const createEngineerCard = (engineer) => {

        //Create engineer card
        const engineerCard = `
        <!--Card for engineer-->
        <div class="card m-3 bg-light" style="width: 18rem;">
            <div class="card-header bg-primary text-light">
                <h2 class="text-center pt-2">${engineer.getName()}</h2>
                <h3 class="text-center"><i class="fa-solid fa-mug-hot"></i>${engineer.getRole()}</h3>
            </div>
            <ul class="list-group list-group-flush p-3">
                <li class="list-group-item border">ID: ${engineer.getId()}</li>
                <li class="list-group-item border">Email: <a href="mailto: ${engineer.getEmail()}" target="_blank">${engineer.getEmail()}</a></li>
                <li class="list-group-item border">GitHub Username: <a href="https://github.com/${engineer.getGithub()} target="_blank">${engineer.getGithub()}</a></li>
            </ul>
        </div>
        `;

        //Push engineer card to the array 
        teamResults.push(engineerCard);
    };

    //Create card for intern
    const createInternCard = (intern) => {

        //Create intern card
        const internCard =  `
        <!--Card for intern-->
        <div class="card m-3 bg-light" style="width: 18rem;">
            <div class="card-header bg-primary text-light">
                <h2 class="text-center pt-2">${intern.getName()}</h2>
                <h3 class="text-center"><i class="fa-solid fa-mug-hot"></i>${intern.getRole()}</h3>
            </div>
            <ul class="list-group list-group-flush p-3">
                <li class="list-group-item border">ID: ${intern.getId()}</li>
                <li class="list-group-item border">Email: <a href="mailto: ${intern.getEmail()}" target="_blank">${intern.getEmail()}</a></li>
                <li class="list-group-item border">School: ${intern.getSchool()}</li>
            </ul>
        </div>
        `;

        //Push intern card to the array 
        teamResults.push(internCard);
    };

    //Loop through each team data in the array and call the function
    teamData.forEach(members => {

        //Check to see which role to generate which card for the employee
        if (members.getRole() === "Manager") {

            //Call the function to generate manager card
            createManagerCard(members);

        } else if (members.getRole() === "Engineer") {

            //Call the function to generate engineer card
            createEngineerCard(members);

        } else {

            //Call the function to generate intern card
            createInternCard(members);
        }
    });

    //Return the html card that is generated and join them together
    return teamResults.join("");
};

//Export createMarkupHTML() function
module.exports = createMarkupHTML;