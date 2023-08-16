/*
4. Employee Class Challenge.

Create a class called Employee with three properties: name, position, and salary. The class should have a method called getSalary that returns the employee's salary. Instantiate an instance of the Employee class and call the getSalary method.

Expected Output:
console.log(employee1.getSalary()); // Output: 80000
*/

class Employee {
    constructor(name, position, salary) {
        this.name = name;
        this.position = position;
        this.salary = salary;
    }

    getSalary() {
        return this.salary;
    }
}

const employee1 = new Employee("Prabir Kumar", "Software Engineer", 80000);

  // Expected Output
  console.log(employee1.getSalary()); // Output: 80000

