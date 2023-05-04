const generateHTML = (employees) => {
    // fill HTML for chosen employee
    let employeeHtml = ""
    employees.forEach(employee => {
       
        // engineer HTML
        if (employee.getRole() === "Engineer") {
            employeeHtml += `
            <div class="card m-4 shadow-md text-center" style="width: 18rem;">
            <div class="card-body bg-warning">
                 <h2 class="card-title">${employee.getName()}</h2>
                 <h3 class="card-title fst-italic">${employee.getRole()}</h3>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${employee.getId()}</li>
                <li class="list-group-item">Email: <a href="mailto:${employee.getEmail()}">${employee.getEmail()}</a></li>
                <li class="list-group-item">GitHub: <a href="https://github.com/${employee.getGithub()}" target="_blank">${employee.getGithub()}</a></li>
            </ul>
            </div>
            `
        }

        // intern HTML
        if (employee.getRole() === "Intern") {
            employeeHtml += `
            <div class="card m-4 shadow-md text-center" style="width: 18rem;">
            <div class="card-body bg-warning">
                <h2 class="card-title">${employee.getName()}</h2>
                <h3 class="card-title fst-italic">${employee.getRole()}</h3>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${employee.getId()}</li>
                <li class="list-group-item">Email: <a href="mailto:${employee.getEmail()}">${employee.getEmail()}</a></li>
                 <li class="list-group-item">School: ${employee.getSchool()}</li>
            </ul>
            </div>
            `
        }

        //manager HTML
         if (employee.getRole() === "Manager") {
            employeeHtml += `
            <div class="card m-4 shadow-md text-center" style="width: 18rem;">
            <div class="card-body bg-warning">
                <h2 class="card-title">${employee.getName()}</h2>
                 <h3 class="card-title fst-italic">${employee.getRole()}</h3>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${employee.getId()}</li>
                <li class="list-group-item">Email: <a href="mailto:${employee.getEmail()}">${employee.getEmail()}</a></li>
                <li class="list-group-item">Office Number: ${employee.getOfficeNumber()}</li>
            </ul>
            </div>
            `
        }
    });

    
 //HTML for user input 

const html = `
<DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width", initial-scale=1.0">
    <title>Team Profile Generator</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
    <link href="style.css" rel="stylesheet">
</head>
</head>
<body>
<h1 class "header pb-3">My Team</h1>
div class="d-flex flex-wrap justify-content-center">
${employeeHtml}
</div>
</body>
</html>
`

return html
}

module.exports = generateHTML;
