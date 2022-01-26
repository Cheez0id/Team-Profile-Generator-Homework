const inquirer = require("inquirer");
const fs = require("fs");
const generateTeam = require("./src/generateHTML");
const Manager = require("./assets/Manager");
const Engineer = require("./assets/Engineer");
const Intern = require("./assets/Intern");

//setting up questions for inquirer npm


const roleChoice = [
  {
		type: "list",
		name: "position",
		message: "What is your job title?",
    choices: ["Manager", "Engineer", "Intern"],
	}
]
const init = () =>{
  inquirer.prompt(roleChoice).then((choice) =>{
      if(choice.position === undefined){
      console.log("lol, it's undefined!")
    }
      else if(choice.position === 'Manager'){
      inquirer.prompt(managerQs).then((answers) => {
        const employee = new Manager(answers.employeeName, answers.id, answers.email, answers.officeNumber);
         employee.printInfo();         
            let team =[]
            team.push(employee);
            console.log(team);       
      makeEmployeeHTML(generateTeam(team)); 
      }
    )}
    else if(choice.position === 'Engineer'){
          inquirer.prompt(engineerQs).then((answers) => {
            const employee = new Engineer (answers.employeeName, answers.id, answers.email, answers.gitHubName);
             employee.printInfo();
              let team =[]
              team.push(employee);
              console.log(team);
              makeEmployeeHTML(generateTeam(team));
               }
            )}
    else if(choice.position === 'Intern'){
          inquirer.prompt(internQs).then((answers) => {
            const employee = new Intern (answers.employeeName, answers.id, answers.email, answers.school);
             employee.printInfo();
              let team =[]
              team.push(employee);
              console.log(team);
              makeEmployeeHTML(generateTeam(team));
               }
            )}        
        else(console.log("you chose something other than manager!!"))
    return;  
    })
  }

  init();

  //use the above answer to create 3 more functions with the 3 below questions plus role-specific
  //TODO make the questions for the other roles
  const managerQs = [
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
	},
  {
		type: "input",
		name: "officeNumber",
		message: "What is your office number?",
	}
]

const engineerQs = [
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
	},
  {
		type: "input",
		name: "gitHubName",
		message: "What is your gitHub username?",
	}
]

const internQs = [
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
	},
  {
		type: "input",
		name: "school",
		message: "What is your school?",
	}
]

 //a function to write an html file 
  const makeEmployeeHTML = (data) =>{
    fs.writeFile("./lib/sample.html", data, (err) =>
    err ? console.error(err) : console.log ("Created HTML!")
    )};
  



