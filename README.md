# Team-Profile-Generator-Homework

- see Readme in assets folder for original assignment instructions -
 
 ## Task

 Build a Command-Line application that takes in information about an empoyee and generate HTML webpage to display summaries for each team member; include testing for evrey part of code.

 ## Acceptance Criteria

```md
GIVEN a command-line application that accepts user input
WHEN I am prompted for my team members and their information
THEN an HTML file is generated that displays a nicely formatted team roster based on user input
WHEN I click on an email address in the HTML
THEN my default email program opens and populates the TO field of the email with the address
WHEN I click on the GitHub username
THEN that GitHub profile opens in a new tab
WHEN I start the application
THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
WHEN I enter the team manager’s name, employee ID, email address, and office number
THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
WHEN I select the engineer option
THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
WHEN I select the intern option
THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
WHEN I decide to finish building my team
THEN I exit the application, and the HTML is generated
```
## Additionally

application should use [Jest](https://www.npmjs.com/package/jest) for running the unit tests and [Inquirer](https://www.npmjs.com/package/inquirer) for collecting input from the user. The application will be invoked by using the following command:

```bash
node index.js
```
The application must include `Employee`, `Manager`, `Engineer`, and `Intern` classes. The tests for these classes (in the `_tests_` directory) must ALL pass.

The first class is an `Employee` parent class with the following properties and methods:

* `name`

* `id`

* `email`

* `getName()`

* `getId()`

* `getEmail()`

* `getRole()`&mdash;returns `'Employee'`

The other three classes will extend `Employee`.

In addition to `Employee`'s properties and methods, `Manager` will also have the following:

* `officeNumber`

* `getRole()`&mdash;overridden to return `'Manager'`

In addition to `Employee`'s properties and methods, `Engineer` will also have the following:

* `github`&mdash;GitHub username

* `getGithub()`

* `getRole()`&mdash;overridden to return `'Engineer'`

In addition to `Employee`'s properties and methods, `Intern` will also have the following:

* `school`

* `getSchool()`

* `getRole()`&mdash;overridden to return `'Intern'`

Finally, although it’s not a requirement, consider adding validation to ensure that user input is in the proper format.


## Pseudocode from Jung
1) Create a package.json!
2) Determine what Libraries we need to use (inquirer), (jest)
3) How do I download a library as a Dev Dependency on package.json? (JEST)
4) How do I download a library as a dependency on package.json (inquirer)?

5) To create a folder structure with __tests__, dist, lib, src, .gitignore, index.js, and package.json

6) Let's create the test files as the README recommends. (One for each task Employee, Engineer, Intern, & Manager)

7) TDD convention -> We write the tests on what the application needs to do, then write the Javascript file, then see if we pass the test. 

8) WHY DO WE HAVE 4 TEST FILES?
    => Because we want to separate the Javascript files based on the CLASSES. 
9) Employee, Engineer, Intern, Manager JS files. 
10) Is an Engineer an Employee?
10b) Is an Intern an Employee (YES)
10c) Is a Manager an Employee (YES)

11) NOW let's try to use our classes to run the inquirer library in our command line/terminal.
12) Inquirer ask to create a manager, add IDs for a manager, add email for manager, and once that is done, HOW DO WE PUSH THIS INFORMATION INTO AN HTML TEMPLATE?
13) .then(answers => {is there a way to store the user's inputs into an array and PASS THEM INTO THE PAGE-TEMPLATE?})

