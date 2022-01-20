const inquirer = require("inquirer");
const fs = require("fs");
const generateTeam = require("./src/generateHTML");
const Employee = require("./Employee");

//setting up questions for inquirer npm

const newEmployee = [
  {
		type: "list",
		name: "postion",
		message: "What is your job title?",
    choices: ["Manager", "Engineer", "Intern"],
	},
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

  
//TODO: figuring out classes - working on testEmployeeFunc to be able to take the data that the user enters and create various classes
const testEmployeeFunc = () =>{
class Employee {
  constructor(name, id, email){
    this.name = name;
    this.id = id;
    this.email = email;
    };
  }
}
//pretty sure I'm going to need to run inquirer.prompt here to get the data so as to create the new employee stuff
// const jessicka = new Employee (newEmployee.name, newEmployee.id, newEmployee.email);
// jessicka.printInfo();
// class Manager{};
// class Engineer{};
// class Intern{};


//Just a console.log function
  const log = () => {
      inquirer.prompt(newEmployee).then((answers) => {
      console.log({ ...answers });
      console.log(answers.employeeName);
    	});
  };
  // log();

 //a function to write an html file 
  const makeEmployeeHTML = (data) =>{
    fs.writeFile("sample.html", data, (err) =>
    err ? console.error(err) : console.log ("Created HTML!")
    )};
  

// function to initialize app
const init = () => {
	inquirer.prompt(newEmployee).then((answers) => {
    console.log(typeof answers);

//stringified the answers for some reason
    answerString = JSON.stringify(answers);
      console.log(typeof answerString);
//a function to use the generatehtml function putting the answers into the html page generated      
    makeEmployeeHTML(generateTeam
      ({ ...answers }));
  }
  )}
init();



