const engineerTest = require('../lib/engineer')

describe("getGithub", () => {
    it("should return employee's Github username", ()=>{
        const engineer = new engineerTest("Vinh",111,"vinh@vinh.com", "vinhkhamhuynh");
        expect(engineer.getGithub()).toEqual("vinhkhamhuynh")

    });
});

describe("getMemberType", () => {
    it("should return the type of employee", () => {
        const engineer = new engineerTest("Vinh",111,"vinh@vinh.com","Engineer");

        expect(engineer.getMemberType()).toEqual("Engineer")
    });
});