const inquirer = require("inquirer");
const fs = require("fs");

//setting up questions for inquirer npm
// class Employee {
//   constructor(){}
// }
const Employee = [
	{
		type: "input",
		name: "name",
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
    for (something of Employee)
    console.log(something.name);
    inquirer.prompt(Employee).then((answers) => {
      console.log({ ...answers });
    	});
  };
    
  log();


//  // TODO: Create a function to write README file
// function writeToFile(data) {
// 	fs.writeFile("README.md", data, (err) =>
// 		err ? console.error(err) : console.log("Success!")
// 	);
// }

// function to initialize app
// function init() {
// 	inquirer.prompt(questions).then((answers) => {
// 		writeToFile(generateMarkdown({ ...answers }));
// 	});
// }

// Function call to initialize app
// init();

