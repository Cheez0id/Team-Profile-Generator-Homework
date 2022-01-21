
// create the team
// # ${answerString} 
// ## Employee Name
// ${newEmployee.employeeName}
// ## Employee ID
// ${newEmployee.id}
// ## Employee E-mail
// ${newEmployee.email}

// const Manager = require('./Manager');
// const Employee = require('./Employee');




// //THIS IS THE CODE FROM JUNG
const generateTeam = team => {

  // create the manager html
  const generateManager = Manager => {
      return `
      <div class="card employee-card">
      <div class="card-header">
          <h2 class="card-title">${Manager.getName()}</h2>
          <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>${manager.getRole()}</h3>
      </div>
      <div class="card-body">
          <ul class="list-group">
              <li class="list-group-item">ID: ${Manager.getId()}</li>
              <li class="list-group-item">Email: <a href="mailto:${Manager.getEmail()}">${Manager.getEmail()}</a></li>
              <li class="list-group-item">Office number: ${Manager.getOfficeNumber()}</li>
          </ul>
      </div>
  </div>
      `;
  };

  // create the html for engineers
  const generateEngineer = engineer => {
      return `
      <div class="card employee-card">
  <div class="card-header">
      <h2 class="card-title">${engineer.getName()}</h2>
      <h3 class="card-title"><i class="fas fa-glasses mr-2"></i>${engineer.getRole()}</h3>
  </div>
  <div class="card-body">
      <ul class="list-group">
          <li class="list-group-item">ID: ${engineer.getId()}</li>
          <li class="list-group-item">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
          <li class="list-group-item">GitHub: <a href="https://github.com/${engineer.getGithub()}" target="_blank" rel="noopener noreferrer">${engineer.getGithub()}</a></li>
      </ul>
  </div>
</div>
      `;
  };

  // create the html for interns
  const generateIntern = intern => {
      return `
      <div class="card employee-card">
  <div class="card-header">
      <h2 class="card-title">${intern.getName()}</h2>
      <h3 class="card-title"><i class="fas fa-user-graduate mr-2"></i>${intern.getRole()}</h3>
  </div>
  <div class="card-body">
      <ul class="list-group">
          <li class="list-group-item">ID: ${intern.getId()}</li>
          <li class="list-group-item">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
          <li class="list-group-item">School: ${intern.getSchool()}</li>
      </ul>
  </div>
</div>
      `;
  };

  const html = [];

  //it looks like the below will create the cards based on the responses entered in by the employees. I need to create the team array from the answers that the employees put in?
  html.push(team.filter);
  html.push(team
      .filter(employee => employee.getRole() === "Manager")
      .map(manager => generateManager(manager))
  );
  html.push(team
      .filter(employee => employee.getRole() === "Engineer")
      .map(engineer => generateEngineer(engineer))
      .join("")
  );
  html.push(team
      .filter(employee => employee.getRole() === "Intern")
      .map(intern => generateIntern(intern))
      .join("")
  );

  return html.join("");

}

// export function to generate entire page
module.exports = team => {

  return `
  <!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta http-equiv="X-UA-Compatible" content="ie=edge" />
  <title>My Team</title>
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
      integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
  <link rel="stylesheet" href="style.css">
  <script src="https://kit.fontawesome.com/c502137733.js"></script>
</head>

<body>
  <div class="container-fluid">
      <div class="row">
          <div class="col-12 jumbotron mb-3 team-heading">
              <h1 class="text-center">My Team</h1>
          </div>
      </div>
  </div>
  <div class="container">
      <div class="row">
          <div class="team-area col-12 d-flex justify-content-center">
              ${generateTeam(team)}
          </div>
      </div>
  </div>
</body>
</html>
  `;
};



//THIS IS THE CODE FROM ME
// function generateTeam(newEmployee) {
//   return `<!DOCTYPE html>
//   <html lang="en">
//   <head>
//     <meta charset="UTF-8">
//     <meta http-equiv="X-UA-Compatible" content="IE=edge">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Document</title>
//   </head>
//   <body>

//   ## Employee Name
//   ${newEmployee.employeeName}
//   ## Employee ID
//   ${newEmployee.id}
//   ## Employee E-mail
//   ${newEmployee.email}
//   </body>
//   </html>
//  `;
// }

module.exports = generateTeam;