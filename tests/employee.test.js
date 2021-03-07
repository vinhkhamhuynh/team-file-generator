const employeeTest = require('../lib/employee');


describe("getName", () => {
    it("should return employee's name", () => {
        const employee = new employeeTest("Vinh",111,"vinh@vinh.com");

        expect(employee.getName()).toEqual("Vinh")
    });
});

describe("getID", () => {
    it("should return employee's id number", () => {
        const employee = new employeeTest("Vinh",111,"vinh@vinh.com");

        expect(employee.getId()).toEqual(111)
    });
});

describe("getEmail", () => {
    it("should return employee's email address", () => {
        const employee = new employeeTest("Vinh",111,"vinh@vinh.com");

        expect(employee.getEmail()).toEqual("vinh@vinh.com")
    });
});

describe("getMemberType", () => {
    it("should return the type of employee", () => {
        const employee = new employeeTest("Vinh",111,"vinh@vinh.com","employee");

        expect(employee.getMemberType()).toEqual("employee")
    });
});