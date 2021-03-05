//import parent class
const employee = require('./employee')

//extend employee class with manager class
class Manager extends employee {
    constructor(officeNum){
        this.officeNum = officeNum;
    };

    getOfficeNum(){
        return this.officeNum;
    }

    getRole(){
        return 'manager';
    };
};



module.exports = Manager;

//test


console.log(OfficeNum);