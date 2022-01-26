//getrole getschool//get role get office number

const Employee = require('./Employee');

class Intern extends Employee {
  constructor(name, id, email, school) {
    
    //HEY SUPER IS IMPORTANT
    super(name, id, email);
    this.school = school;
    this.role = 'Intern';
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
    return this.school;  
  }
}




module.exports = Intern;