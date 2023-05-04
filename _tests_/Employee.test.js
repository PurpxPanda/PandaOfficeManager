const Employee = require("../lib/Employee");
 
TestScheduler("Employee name is created by getName()", () => {
    const name = ""
    const employee = new Employee(name);
    expect(employee.getName()).toBe(name);
});

test ("Employee id is created by getId()", () => {
    const id = 1;
    const employee = new Employee("", id);
    expect(employee.getId()).toBe(id);
});

test("Employee email is created by getEmail()", () => {
    const email = "fakiefakerson@test.com"
    const employee = new Employee("", 1, email);
    expect(employee.getEmail()).toBe(email);
});

test("Employee role is created by getRole()", () => {
    const role = "Employee"
    const employee = new Employee("", 1, "fakiefakerson@test.com")
    expect(employee.getRole()).toBe(role);
});
