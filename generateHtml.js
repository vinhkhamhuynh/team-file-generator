const employee = require('./lib/employee');
const manager = require('./lib/manager')

//function to create manager card with loop
function loopManager(teamManager) {
    let managerCards = [];

    for(i =0; i< teamManager.length;i++){
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
                    <li class="list-group-item">${teamManager[i].getOfficeNum()}</li>
                </ul>

            </div>

        </div>
    </section>`
    managerCards.push(managerSection)
    }
    return managerCards.join('');
};

//function to generate html
function generateHtml(teamManager) {
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
</body>
</html>
   
    
    `;
}

//export to index.js
module.exports = generateHtml;