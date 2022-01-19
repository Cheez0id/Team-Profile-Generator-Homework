function generateHTML(data) {
  return `# ${answerString} 
  ## Description
  ${data.description}
  ## Table of Contents
  ${data.contents}
  ## Installation
  ${data.installation}
  ## Usage
  ${data.usage}
  ## Contributions:
  ${data.contributing}
  ## Testing:
   ${data.tests}
  ## Questions:
  ${data.questions}`;
}

module.exports = generateHTML;