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


//questions for manager info
const managerQuestions = [
    {
        type: 'input',
        name: 'managerName',
        message: "What is the team manager's name?",
        validate: function validatemanagerName(managerName) {
            return managerName !== '';
        }
    },
];



//created fuction to init app
const buildTeam = () => {

    fs.writeFileSync('./dist/test.html', generateHtml(teamManager), (err) => err ? console.log(err) : console.log('Team Assembled'));

};


//function call to initialize app
init();