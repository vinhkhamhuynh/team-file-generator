//imports parent class

const employee = require("./employee");

//intern class extend to employyee

class intern extends employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;


    };

    getSchool() {
        return this.school
    };

    getMemberType() {
        return 'Intern'
    };
};

module.exports = intern;