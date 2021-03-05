//creating class for employee
class employee {
    constructor(name, id, email){
        this.name =name;
        this.id =id;
        this.email = email;
    };

    //prompt user for input
    getName(){
        return this.name;
    };

    getId(){
        return this.id;

    };

    getEmail(){
        return this.email;
    };

    getRole(){
        return 'employee';
    };
};

//export employee
module.exports = employee;