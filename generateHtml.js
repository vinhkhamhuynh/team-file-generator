const employee = require('./lib/employee');
const manager = require('./lib/manager');
const engineer = require('./lib/engineer');

//function to create manager card with loop
function loopManager(teamManager) {
    let managerCards = [];

    for (i = 0; i < teamManager.length; i++) {
        let managerSection = `
        <section class="col">
        <div class="card shadow rounded">

            <div class="card-header">
                ${teamManager[i].getName()} <br>
                ${teamManager[i].getMemberType()}
            </div>

            <div class="card-body">

                <ul class="list-group list-group-flush border">
                    <li class="list-group-item">ID: ${teamManager[i].getId()}</li>
                    <li class="list-group-item">Email: <a href="mailto:${teamManager[i].getEmail()}">${teamManager[i].getEmail()}</a></li>
                    <li class="list-group-item">Office Number: ${teamManager[i].getOfficeNum()}</li>
                </ul>

            </div>

        </div>
    </section>`
        managerCards.push(managerSection)
    }
    return managerCards.join('');
};

//function to generate engineer card with loop
const loopEngineer = (teamEngineer) => {
    let engineerCards = [];


    for (i = 0; i < teamEngineer.length; i++) {
        let engineerSection = `<section class="col">
    <div class="card shadow rounded">

        <div class="card-header">
            ${teamEngineer[i].getName()} <br>
            ${teamEngineer[i].getMemberType()}
        </div>

        <div class="card-body">

            <ul class="list-group list-group-flush border">
                <li class="list-group-item">ID: ${teamEngineer[i].getId()}</li>
                <li class="list-group-item">Email: <a href="mailto:${teamEngineer[i].getEmail()}">${teamEngineer[i].getEmail()}</a></li>
                <li class="list-group-item">GitHub Link: <a href="https://github.com/${teamEngineer[i].getGithub()}" "target=_blank">${teamEngineer[i].getGithub()}</li>
            </ul>

        </div>

    </div>
    </section>`
        engineerCards.push(engineerSection)
    }
    return engineerCards.join('');
};

    //function to generate html
    function generateHtml(teamManager, teamEngineer) {
        return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>

    <!-- bootstrap -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" crossorigin="anonymous">

    <!-- personal style css -->
    <link rel="stylesheet" href="style.css">
</head>
<body>
${loopManager(teamManager)}
${loopEngineer(teamEngineer)}
</body>
</html>
   
    
    `;
    }

    //export to index.js
    module.exports = generateHtml;