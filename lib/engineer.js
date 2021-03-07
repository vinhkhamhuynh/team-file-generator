//import parent class
const employee = require('./employee');

//engineer class extend to employyee
class engineer extends employee {
    constructor(name, id , email, github) {
        super (name,id, email);
        this.github = github;

    };

    getGithub(){
        return this.github;
    };

    getMemberType(){
        return 'Engineer';
    };
};

module.exports = engineer;