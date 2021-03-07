//packages require
const inquirer = require('inquirer');
const fs = require('fs');
const generateHtml = require('./generateHtml');
const manager = require('./lib/manager');
const engineer = require('./lib/engineer');
const intern = require('./lib/intern');

//arrays to hold new team
let teamManager = [];
let teamEngineer = [];
let teamIntern = [];

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
        choices: ["Manager", "Engineer", "Intern"],
        name: 'memberType',
        when: (answers) => answers.newMem === true,
    },
];


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
            return managerEmail !== '';
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


//generate engineer questions
const engineerQuestions = [
    {
        type: 'input',
        name: 'engineerName',
        message: "What is the team engineer's name?",
        validate: function validateengineerName(engineerName) {
            return engineerName !== '';
        }
    },
    {
        type: 'input',
        name: 'engineerEmail',
        message: "What is the team engineer's email?",
        validate: function validateengineerEmail(engineerEmail) {
            return engineerEmail !== '';
        }
    },
    {
        type: 'input',
        name: 'engineerId',
        message: "What is the team engineer's Id?",
        validate: function validateengineerId(engineerId) {
            return engineerId !== '';
        }
    },
    {
        type: 'input',
        name: 'engineerGithub',
        message: "What is the team engineer's GitHub username?",
        validate: function validateengineerGithub(engineerGithub) {
            return engineerGithub !== '';
        }
    },
];

// What is your intern's name?
// What is your intern's id?
// What is your intern's email?
// What is your intern's school name?
//generate intern questions 
const internQuestions = [
    {
        type: 'input',
        name: 'internName',
        message: "What is the team intern's name?",
        validate: function validateInternName(internName) {
            return internName !== '';
        }
    },
    {
        type: 'input',
        name: 'internId',
        message: "What is the team intern's Id?",
        validate: function validateInternId(internId) {
            return internId !== '';
        }
    },
    {
        type: 'input',
        name: 'internEmail',
        message: "What is the team intern's email?",
        validate: function validateInternEmail(internEmail) {
            return internEmail !== '';
        }
    },
    {
        type: 'input',
        name: 'internSchool',
        message: "What is the team intern's school name?",
        validate: function validateInterSchool(internSchool) {
            return internSchool !== '';
        }
    },
];

//function to add new member
const newMem = () => {
    inquirer.prompt([...newMemQuestions])
        .then((newMemQuestions) => {
            if (newMemQuestions.newMem) {
                switch (newMemQuestions.memberType) {
                    case 'Manager':
                        addManager();
                        break;

                    case 'Engineer':
                        addEngineer();
                        break;

                    case 'Intern':
                        addIntern();
                        break;
                };
            }
            else {
                buildTeam();
            }
        })
        .catch((err) => {
            console.log(err);
        });
};
//function to add new manager
const addManager = () => {
    inquirer.prompt([...managerQuestions])
        .then((managerAnswer) => {
            teamManager.push(new manager(managerAnswer.managerName, managerAnswer.managerId, managerAnswer.managerEmail, managerAnswer.managerOfficeNum));
            newMem();
        });
};

//function to add new engineer
const addEngineer = () => {
    inquirer.prompt([...engineerQuestions])
        .then((engineerQuestions) => {
            teamEngineer.push(new engineer(engineerQuestions.engineerName, engineerQuestions.engineerId, engineerQuestions.engineerEmail, engineerQuestions.engineerGithub));
            newMem();
        });
};

//function to add new intern
const addIntern = () => {
    inquirer.prompt([...internQuestions])
    .then((internQuestions)=> {
        teamIntern.push(new intern(internQuestions.internName, internQuestions.internId, internQuestions.internEmail, internQuestions.internSchool));
        newMem();
    });
};

//created fuction to init app
function buildTeam() { 

    fs.writeFileSync('./dist/index.html', generateHtml(teamManager, teamEngineer, teamIntern), (err) => err ? console.log(err) : console.log("Team Assembled"));

};


//function call to initialize app
addManager();