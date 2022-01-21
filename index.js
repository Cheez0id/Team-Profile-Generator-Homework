const inquirer = require("inquirer");
const fs = require("fs");
const generateTeam = require("./src/generateHTML");
const Manager = require("./Manager");


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
    console.log(typeof choice.position);
    if(choice.position === undefined){
      console.log("lol, it's undefined!")
    }
    else if(choice.position === 'Manager'){
        inquirer.prompt(managerQs).then((answers) => {
        const employee = new Manager(answers.employeeName, answers.id, answers.email, answers.officeNumber);
         employee.printInfo();

         console.log(typeof employee);
         
let team =[]
          team.push(employee);
          console.log(team);
          console.log(team[0]);
      //a function to use the generatehtml function putting the answers into the html page generated      
//TODO LOOK AT THE GENERATOR AND SEE IF ITS CORRECT          
      makeEmployeeHTML(generateTeam(team));
      
        }
        )}
    else if(choice.position === 'Engineer'){
          inquirer.prompt(engineerQs)}
    else if(choice.position === 'Intern'){
            inquirer.prompt(internQs)}
    else(console.log("you chose something other than manager!!"))
    return;
    
    })
    // makeEmployeeHTML(generateTeam
    //   ({ ...answers }));
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

 //a function to write an html file 
  const makeEmployeeHTML = (data) =>{
    fs.writeFile("sample.html", data, (err) =>
    err ? console.error(err) : console.log ("Created HTML!")
    )};
  



