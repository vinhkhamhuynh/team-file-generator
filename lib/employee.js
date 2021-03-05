//creating parent class
class Employee {
    constructor(name, id, email){
        this.name = name;
        this.id = id;
        this.email = email;
    };

    //prompt user for input
    getName(){
        return this.name;
        // console.log(`${this.name}`);
    };

    getId(){
        return this.id;

    };

    getEmail(){
        return this.email;
    };

    getRole(){
        return 'employee';
    //     console.log('test');
    };
};

//export employee
module.exports = Employee;

//test
// const testemployee = new employee('vinh',1,'email','manager');
// testemployee.getRole();