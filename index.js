const inquirer = require("inquirer");
const fs = require("fs");
const generateHTML = require("./src/generateHTML");

//setting up questions for inquirer npm
// class Employee {
//   constructor(){}
// }
const Employee = [
	{
		type: "input",
		name: "employeeName",
		message: "What is your name?",
	},
  {
		type: "input",
		name: "id",
		message: "What is your id?",
	},
  {
		type: "input",
		name: "email",
		message: "What is your email?",
	}
]
  
  const log = () => {
      inquirer.prompt(Employee).then((answers) => {
      console.log({ ...answers });
    	});
  };
    
  // log();

  const makeEmployeeHTML = (data) =>{
    fs.writeFile("sample.html", data, (err) =>
    err ? console.error(err) : console.log ("Created HTML!")
    )};
  

// function to initialize app
const init = () => {
	inquirer.prompt(Employee).then((answers) => {
    console.log(typeof answers);


    answerString = JSON.stringify(answers);
      console.log(typeof answerString);
    makeEmployeeHTML(generateHTML
      ({ ...answers }));
  }
  )}
init();



