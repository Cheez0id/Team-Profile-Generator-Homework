function generateHTML(Employee) {
  return `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
  </head>
  <body>
  # ${answerString} 
  ## Employee Name
  ${Employee.employeeName}
  ## Employee ID
  ${Employee.id}
  ## Employee E-mail
  ${Employee.email}
  </body>
  </html>
 `;
}

module.exports = generateHTML;