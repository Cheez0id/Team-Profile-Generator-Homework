//get role get office number

const Employee = require('./Employee');

class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    
    //HEY SUPER IS IMPORTANT
    super(name, id, email);
    this.officeNumber = officeNumber;
  }
  getRole = () =>{
  
  }
}




module.exports = Manager;