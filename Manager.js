//get role get office number

const Employee = require('./Employee');

class Manager extends Employee {
  constructor(name, id, email, officeNumber, role) {
    
    //HEY SUPER IS IMPORTANT
    super(name, id, email);
    this.officeNumber = officeNumber;
    this.role = 'Manager';
  }


  getRole = () =>{
  
  }
}




module.exports = Manager;