//get role get office number

const Employee = require('./Employee');

class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    
    //HEY SUPER IS IMPORTANT
    super(name, id, email);
    this.officeNumber = officeNumber;
    this.role = 'Manager';
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
    return this.officeNumber;  
  }
}




module.exports = Manager;