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

//Export createMarkupHTML() function
module.exports = createMarkupHTML;