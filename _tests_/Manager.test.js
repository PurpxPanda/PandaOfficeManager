const Manager = require("../lib/Manager");

test("The Manager's office number is created by getOfficeNumber()", () => {
    const officeNumber = 2
    const employee = new Manager("John", 1, "MichaelScott@test.com", officeNumber)
    expect(employee.getOfficeNumber()).toBe(officeNumber)
});

test("Employee role of \"Manager\" is created by getRole()", () => {
    const role = "Manager"
    const employee = new Manager("John", 1, "MichaelScott@test.com")
    expect(employee.getRole()).toBe(role)
});