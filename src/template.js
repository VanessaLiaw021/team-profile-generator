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

//Function that create each card for each employee and display it to the html page
const generateTeams = (teamData) => {

    //Store each of the employee created card to the array 
    let teamResults = [];

    //Function that create the manager's card 
    const generateManagerCard = (manager) => {
        
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

        //Push the manager card to the array 
        teamResults.push(managerCard);
    };
};

//Export createMarkupHTML() function
module.exports = createMarkupHTML;