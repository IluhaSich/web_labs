class Employee {
    constructor(name) {
      this.name = name;
      this.id = name.length;
    }
  
    getDescription() {
      return `Number: ${this.id}, Name: ${this.name}`;
    }
  }
  
  const employeeNames1 = ['Timothy John Berners-Lee', 'Brendan Eich', 'Hakon Wium Lie'];
  const employeeNames2 = ['ABC abc-abc'];
  
  const employees1 = employeeNames1.map(name => new Employee(name));
  const employees2 = employeeNames2.map(name => new Employee(name));
 
  employees1.forEach(employee => {
    console.log(employee.getDescription());
  });
  console.log();
  employees2.forEach(employee => {
    console.log(employee.getDescription());
  });