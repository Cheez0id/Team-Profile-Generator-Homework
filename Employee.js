
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
    console.log(`Office number: ${this.officeNumber}`);
    console.log(`Role: ${this.role}`);
    
  }

  getRole = () =>{
  
  }
}

//ge tname id email role(role will just return a string)
module.exports = Employee;
