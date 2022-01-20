const inquirer = require("inquirer");
const fs = require("fs");
const generateTeam = require("./src/generateHTML");
const Employee = require("./Employee");

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
    console.log(choice.position);
    if(choice.position === undefined){
      console.log("lol, it's undefined!")
    }
    else if(choice.position === 'Manager'){
        inquirer.prompt(managerQs).then((answers) => {
          const employee = new Employee(answers.employeeName, answers.id, answers.email);
         employee.printInfo();
      
      //a function to use the generatehtml function putting the answers into the html page generated      
          makeEmployeeHTML(generateTeam
            ({ ...answers }));
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
		message: "What is your phone number?",
	}
]

 //a function to write an html file 
  const makeEmployeeHTML = (data) =>{
    fs.writeFile("sample.html", data, (err) =>
    err ? console.error(err) : console.log ("Created HTML!")
    )};
  



