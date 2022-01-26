//get role get office number

const Employee = require('./Employee');

class Engineer extends Employee {
  constructor(name, id, email, gitHubName) {
    
    //HEY SUPER IS IMPORTANT
    super(name, id, email);
    this.gitHubName = gitHubName;
    this.role = 'Engineer';
  }
  getName = () =>{
    return this.name;  
  }
  getId = () =>{
    return this.id;  
  }
  getRole = () =>{
    return this.role;  
  }
  getEmail = () =>{
    return this.email;  
  }
  getOfficeNumber = () =>{
    return this.gitHubName;  
  }
}




module.exports = Engineer;