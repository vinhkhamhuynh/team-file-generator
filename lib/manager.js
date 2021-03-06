//import parent class
const employee = require('./employee')

//extend employee class with manager class
class manager extends employee {
    constructor(name, id, email, officeNum){
        super(name, id, email);
        this.officeNum = officeNum;
    };

    getOfficeNum(){
        return this.officeNum;
    }

    getMemberType(){
        return 'Manager';
    };
};



module.exports = manager;

//test


