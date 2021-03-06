// Please buit your team
// What is the team manager's name?
// What is the team manager's id?
// What is the team manager's email?
// What is the team manager's office number?
// Which type of team member would you like to add?
// What is your engineer's name?
// What is your engineer's id?
// What is your engineer's email?
// What is your engineer's Github username?
// Which type of team member would you like to add?
// engineer
//intern
//I am finished building my team.
// What is your intern's name?
// What is your intern's id?
// What is your intern's email?
// What is your intern's school name?

//built test for employee
//built test manager
//built test engineer
//built test intern

//build promp to collect information

//generate html base on the information collected 


//packages require
const inquirer = require('inquirer');
const fs = require('fs');
const generateHtml = require('./generateHtml');
const manager = require('./lib/manager');

//arrays to hold new team
let teamManager = [];

//questions for new member of the team
const newMemQuestions = [
    {
        type: 'confirm',
        message: 'Are you adding new member to the team?',
        name: 'newMem'
    },
    {
        type: 'list',
        message: 'Which type of team member would you like to add?',
        choice: ["Engineer", "Intern"],
        name: 'memberType',
        when: (answers) => answers.newMember === true,
    },
];

// Please buit your team
// What is the team manager's name?
// What is the team manager's id?
// What is the team manager's email?
// What is the team manager's office number?
//questions for manager info
const managerQuestions = [
    // {
    //     message: "Please buit your team"
    // },
    {
        type: 'input',
        name: 'managerName',
        message: "What is the team manager's name?",
        validate: function validatemanagerName(managerName) {
            return managerName !== '';
        }
    },
    {
        type: 'input',
        name: 'managerId',
        message: "What is the team manager's ID?",
        validate: function validatemanagerId(managerId) {
            return managerId !== '';
        }
    },
    {
        type: 'input',
        name: 'managerEmail',
        message: "What is the team manager's Email?",
        validate: function validatemanagerEmail(managerEmail) {
            return managerEmail!== '';
        }
    },
    {
        type: 'input',
        name: 'managerOfficeNum',
        message: "What is the team manager's Office Number?",
        validate: function validatemanagerOfficeNum(managerOfficeNum) {
            return managerOfficeNum !== '';
        }
    },
];

//function to add new manager
const addManager = ()=> {
    inquirer.prompt([...managerQuestions])
    .then ((managerAnswer) => {
        teamManager.push(new manager(managerAnswer.managerName, managerAnswer.managerId, managerAnswer.managerEmail, managerAnswer.managerOfficeNum));
        newMem();
    })
}

//function to add new member
const newMem =() => {
    inquirer.prompt([...newMemQuestions])
    .then ((newMemAnswers)=> {
        if (newMemAnswers.newMem) {
            switch(newMemAnswers.memberType) {
                case 'Manager':
                    addManager();
                    break;
            };
        } 
        else {
            buildTeam();
        }
    })
    .catch ((err)=> {
        console.log(err);
    });
};

//created fuction to init app
const buildTeam = () => {

    fs.writeFileSync('./dist/test.html', generateHtml(teamManager), (err) => err ? console.log(err) : console.log('Team Assembled'));

};


//function call to initialize app
addManager();