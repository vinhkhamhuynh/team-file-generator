const intern = require('../lib/intern')
const managerTest =require('../lib/manager')

describe("getOfficeNum", ()=> {
    it("should return manager's office number", ()=> {
        const manager = new managerTest("Vinh",111,"vinh@vinh.com", 2222);
        expect(manager.getOfficeNum()).toEqual(2222)
    });
});

describe("getMemberType", () => {
    it("should return the type of employee", () => {
        const manager = new managerTest("Vinh",111,"vinh@vinh.com","Manager");

        expect(manager.getMemberType()).toEqual("Manager")
    });
});