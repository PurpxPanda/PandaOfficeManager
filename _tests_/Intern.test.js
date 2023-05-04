const Intern = require("../lib/Intern");

test("The Intern's school is  is created by getSchool()", () => {
    const school = "SAIT"
    const employee = new Intern("John", 1, "ryan@test.com", school)
    expect(employee.getSchool()).toBe(school)
});

test("Employee role of \"Intern\" is created by getRole()", () => {
    const role = "Intern"
    const employee = new Intern("John", 1, "ryan@test.com", "SAIT")
    expect(employee.getRole()).toBe(role)
});