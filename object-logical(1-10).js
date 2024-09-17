console.log(
  "===================JavaScript Object Logical Program============================="
);
console.log(
  "01. Write a javascript program to list the properties of a JavaScript Object"
);

var student = {
  name: "Mahadev Erande",
  class: "VI",
  rollNo: 12,
};

var properties = Object.keys(student);
console.log(`Properties of Student Object:${properties}`);

console.log(
  "02. Write a JavaScript program to delete the rollno property from the object. Also print the object before or after deleting the property."
);

var student = {
  name: "Mahadev Erande",
  class: "VI",
  rollNo: 12,
};

console.log("Before deleting rollno:");
console.log(student);
delete student.rollNo;
console.log("After deleting rollno:");
console.log(student);

console.log(
  "03. Write a JavaScript program to get the length of a JavaScript object"
);

var car = {
  make: "Toyota",
  model: "Camry",
  year: 2020,
  color: "blue",
};

function getObjectLength(obj) {
  return Object.keys(obj).length;
}

console.log("Length of the car object: " + getObjectLength(car));

console.log(
  "04. How to get dynamic accesss to an object property in JavaScript ?"
);

var person = {
  name: "Mahadev Erande",
  age: 23,
  profession: "Developer",
};

var propertyName = "age";

console.log(person[propertyName]);

console.log(
  "05. How to modify an object’s property in an array of objects in JavaScript?"
);

var employees = [
  {
    id: 1,
    name: "Mahadev Erande",
    position: "Full Stack Developer",
    salary: 40000,
  },
];

function updateEmployeeSalary(id, newSalary) {
  for (var i = 0; i < employees.length; i++) {
    if (employees[i].id == id) {
      employees[i].salary = newSalary;
      return;
    }
  }
}

updateEmployeeSalary(1, 50000);
console.table(employees);

console.log("06. How to get the last item of JavaScript object?");
console.log("i. Using  Object.keys() Method");
var car = {
  make: "Toyota",
  model: "Camry",
  year: 2020,
  color: "blue",
};
// Using Object.keys()
var keys = Object.keys(car);
var lastKey = keys[keys.length - 1];

console.log("Last property using keys:", lastKey, car[lastKey]);

console.log("ii. Using Object.entries()");

var car = {
  make: "Toyota",
  model: "Camry",
  year: 2020,
  color: "blue",
};

//Using Object.entries()

var entries = Object.entries(car);
var lastEntry = entries[entries.length - 1];
console.log("Last property using entries:", lastEntry[0], lastEntry[1]);


console.log(
  "07. How to use array that include and check an object against a property of an object?"
);

var students = [
  { id: 1, name: "Mahadev Erande", grade: "A" },
  { id: 2, name: "Mahesh Masal", grade: "B" },
  { id: 3, name: "Manik Chavan", grade: "C" },
];

function checkStudentExists(id) {
  return students.filter((student) => student.id == id).length > 0;
}

console.log(checkStudentExists(2));
console.log(checkStudentExists(4));

console.log("08. How to add an object to an array in JavaScript?");

var fruits = ["apple", "banana", "orange"];
var newFruits = {
  name: "grapes",
  color: "purple",
};

fruits.push(newFruits);
console.log(fruits);

console.log(
  "09. How to remove duplicates from an array of objects using JavaScript?"
);
var students = [
  { id: 1, name: "Mahadev Erande" },
  { id: 2, name: "Mahesh Masal" },
  { id: 2, name: "Mahesh Masal" },
  { id: 3, name: "Manik Chavan" },
];
function removeDuplicates(arr) {
  return arr.filter(
    (student, index, self) =>
      index ==
      self.findIndex((t) => t.id == student.id && t.name == student.name)
  );
}

var uniqueStudents = removeDuplicates(students);
console.table(uniqueStudents);

console.log("10. How to get a subset of a JavaScript object's properties?");
var person = {
  firstName: "Mahadev",
  lastName: "Erande",
  age: 23,
  city: "Pune",
  country: "India",
};

var { firstName, lastName } = person;
console.log(firstName, lastName);
