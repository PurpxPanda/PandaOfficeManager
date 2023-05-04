const Engineer = require("../lib/Engineer");

test("Engineer github is created by getGithub()", () => {
    const github = "testuser"
    const employee = new Engineer("John", 2, "engi@test.com", username)
    expect(employee.github).toBe(username)
})

test("Employee role of \"Engineer\" is created by getRole()", () => {
    const role = "Engineer"
    const employee = new Engineer("John", 2, "engi@test.com", "testuser")
    expect(employee.getRole()).toBe(role)
})