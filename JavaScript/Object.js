// Declaring Objects:
let obj={id:102, name:'Amit', salary:12000};
console.log(obj);

// Alternative
let emp = new Object();
emp.id = 102;
emp.name = "Golu" 
console.log(emp);

// Alternative
function Emp(i, n, s){
    this.id = i;
    this.name = "Amit";
    this.salary = 12000;
}
let e = new Emp(20, 'any', 15000);
console.log(e);

// Accessing Object Properties:
console.log(emp.id);
console.log(emp['name']);

// Updating Object Properties:
emp.salary = 13000;
emp['id'] = 12;
console.log(emp);

// Deleting Object Properties:
delete emp.id;
console.log(emp);

// Methods
let keys = Object.keys(emp);
console.log(keys);

let values = Object.values(emp);
console.log(values); 

let entries = Object.entries(emp);
console.log(entries);

Object.seal(emp);
emp.Rollno = 17;
delete emp.salary;
emp.name = "Amitkumar";
console.log(emp);

Object.freeze(emp);
emp.Rollno = 17;
delete emp.salary;
emp.name = "Amit";
console.log(emp);

let newobj = Object.assign({Rollno:17}, emp);
console.log(newobj);