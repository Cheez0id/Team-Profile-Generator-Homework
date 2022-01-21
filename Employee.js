
class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }

  printInfo() {
    console.log(`Name: ${this.name}`);
    console.log(`Id: ${this.id}`);
    console.log(`Email: ${this.email}`);
    if (this.role = 'Manager'){
    console.log(`Office number: ${this.officeNumber}`);
    console.log(`Role: ${this.role}`);
  }
  else (console.log(`just an employee`))
    
  }

  getRole = () =>{
  
  }
}

//ge tname id email role(role will just return a string)
module.exports = Employee;
