const employee = require('./lib/employee');
const manager = require('./lib/manager');
const engineer = require('./lib/engineer');
const intern = require('./lib/intern')

//function to create manager card with loop
function loopManager(teamManager) {
    let managerCards = [];

    for (i = 0; i < teamManager.length; i++) {
        let managerSection = `
        <section class="col">
        <div class="card shadow rounded">

            <div class="card-header mHeader">
                ${teamManager[i].getName()} <br>
                ${teamManager[i].getMemberType()}
            </div>

            <div class="card-body mBody">

                <ul class="list-group list-group-flush border">
                    <li class="list-group-item mLi">ID: ${teamManager[i].getId()}</li>
                    <li class="list-group-item mLi">Email: <a href="mailto:${teamManager[i].getEmail()}">${teamManager[i].getEmail()}</a></li>
                    <li class="list-group-item mLi">Office Number: ${teamManager[i].getOfficeNum()}</li>
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
        let engineerSection = `
        <section class="col">
    <div class="card shadow rounded">

        <div class="card-header eHeader">
            ${teamEngineer[i].getName()} <br>
            ${teamEngineer[i].getMemberType()}
        </div>

        <div class="card-body eBody">

            <ul class="list-group list-group-flush border">
                <li class="list-group-item eLi">ID: ${teamEngineer[i].getId()}</li>
                <li class="list-group-item eLi">Email: <a href="mailto:${teamEngineer[i].getEmail()}">${teamEngineer[i].getEmail()}</a></li>
                <li class="list-group-item eLi">GitHub Link: <a href="https://github.com/${teamEngineer[i].getGithub()}" target="_blank">${teamEngineer[i].getGithub()}</a></li>
            </ul>

        </div>

    </div>
   
    </section>`
        engineerCards.push(engineerSection)
    };
    return engineerCards.join('');
};

//function to generate intern card with loop
const loopIntern = (teamIntern) => {
    let internCard = [];

    for (i = 0; i < teamIntern.length; i++) {
        let internSection = `<section class="col">
        <div class="card shadow rounded">
    
            <div class="card-header iHeader">
                ${teamIntern[i].getName()} <br>
                ${teamIntern[i].getMemberType()}
            </div>
    
            <div class="card-body iBody">
    
                <ul class="list-group list-group-flush border">
                    <li class="list-group-item iLi">ID: ${teamIntern[i].getId()}</li>
                    <li class="list-group-item iLi">Email: <a href="mailto:${teamIntern[i].getEmail()}">${teamIntern[i].getEmail()}</a></li>
                    <li class="list-group-item iLi">School Name: ${teamIntern[i].getSchool()}</li>
                </ul>
    
            </div>
    
        </div>
        </section>`
        internCard.push(internSection);
    };
    return internCard.join('');
};

//function to generate html
function generateHtml(teamManager, teamEngineer, teamIntern) {
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
<header class="header jumbotron">
<h1>Team Avenger Assemble</h1>
</header>

<main class="row justify-content-center">
<section class="col-md-10 justify-content-center text-center m-3">
${loopManager(teamManager)}
<section class="row row-cols-2 row-cols-md-2 g-4 mt-2">
${loopEngineer(teamEngineer)}
</section>
<section class="row row-cols-1 row-cols-md-3 g-4 mt-2">
${loopIntern(teamIntern)}
</section>
</section>
</main>
</body>
</html>
    `;
};

//export to index.js
module.exports = generateHtml;