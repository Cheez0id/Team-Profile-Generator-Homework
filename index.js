const inquirer = require("inquirer");
const fs = require("fs");

//setting up questions for inquirer npm
const questions = [
	{
		type: "input",
		name: "title",
		message: "What is your name?",
	},
  {
		type: "input",
		name: "e-mail",
		message: "What is your e-mail?",
	}
]
  
  const log = () => {
    for (something of questions)
    console.log(something.name)};
  log();


//  // TODO: Create a function to write README file
// function writeToFile(data) {
// 	fs.writeFile("README.md", data, (err) =>
// 		err ? console.error(err) : console.log("Success!")
// 	);
// }

// // TODO: Create a function to initialize app
// function init() {
// 	inquirer.prompt(questions).then((answers) => {
// 		writeToFile(generateMarkdown({ ...answers }));
// 	});
// }

// // Function call to initialize app
// init();

