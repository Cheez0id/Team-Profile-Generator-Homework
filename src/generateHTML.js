function generateHTML(Employee) {
  return `# ${answerString} 
  ## Employee Name
  ${Employee.name}
  ## Employee ID
  ${Employee.id}
  ## Employee E-mail
  ${Employee.email}`;
}

module.exports = generateHTML;