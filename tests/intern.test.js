const employee = require('../lib/employee');
const internTest = require('../lib/intern')

describe('getSchool', ()=> {
    it("should return intern's school name", ()=> {
        const intern = new internTest("Vinh",111,"vinh@vinh.com","school");

        expect(intern.getSchool()).toEqual('school')

    });
});

describe("getMemberType", () => {
    it("should return the type of employee", () => {
        const intern = new internTest("Vinh",111,"vinh@vinh.com","Intern");

        expect(intern.getMemberType()).toEqual("Intern")
    });
});