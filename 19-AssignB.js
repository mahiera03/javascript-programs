class Employee {
  constructor(emp_id, emp_name, emp_dept, emp_salary, emp_company) {
    this.emp_id = emp_id;
    this.emp_name = emp_name;
    this.emp_dept = emp_dept;
    this.emp_salary = emp_salary;
    this.emp_company = emp_company;
  }
}

const emp_anil = new Employee(22, "Anil", "IT", 50000, "TCS");
const emp_radha = new Employee(33, "Radha", "HR", 74000, "wipro");
const emp_rishi = new Employee(55, "Rishi", "Finance", 47000, "TCS");
const emp_sonali = new Employee(66, "Sonali", "Finance", 45000, "Infy");
const emp_monika = new Employee(77, "Monika", "IT", 40000, "wipro");
const emp_viny = new Employee(88, "Vinayak", "IT", 75000, "TCS");
const emp_mahi = new Employee(99, "Mahesh", "HR", 85000, "Infy");

const arrayEmployees = [
  emp_anil,
  emp_radha,
  emp_rishi,
  emp_sonali,
  emp_monika,
  emp_viny,
  emp_mahi,
];
console.log("Case.01: Displaying the employees working in TCS company.");
console.log(`"Employees working in TCS:"`);
for (const element of arrayEmployees) {
  if (element.emp_company == "TCS") {
    console.log(
      `Employee name:${element.emp_name} & Employee Department:${element.emp_dept}`
    );
  }
}

console.log(
  "=============================================================================================================="
);

console.log("Case.02: Displaying the employees from Finance Department.");
console.log(`"Employees working in Finance Department:"`);
for (const element of arrayEmployees) {
  if (element.emp_dept == "Finance") {
    console.log(
      `Employee name:${element.emp_name} & Employee Department:${element.emp_dept}`
    );
  }
}

console.log(
  "=============================================================================================================="
);
console.log(
  "Case.03: Displaying the employees all details whose name starts with R."
);
console.log(`"Employees whose name starts with "R":"`);

for (const element of arrayEmployees) {
  if (element.emp_name.startsWith("R")) {
    console.log(
      `Employee ID: ${element.emp_id}, Employee Name: ${element.emp_name}, Employee Department: ${element.emp_dept}, Employee Salary: ${element.emp_salary}, Employee Company: ${element.emp_company}`
    );
  }
}

console.log(
  "=============================================================================================================="
);
console.log(
  "Case.04: Displaying the employees  details whose salary greater than 75000."
);
console.log(`"Employees whose salary greater than 75000 :"`);

for (const element of arrayEmployees) {
  if (element.emp_salary > 75000) {
    console.log(
      `Employee Name: ${element.emp_name}, Employee Company:${element.emp_company}, Employee Salary:${element.emp_salary}`
    );
  }
}

console.log(
  "=============================================================================================================="
);
console.log(
  "Case.05: Displaying the employees  details whose salary greater than or equal to 50000 & From IT Department."
);
console.log(
  `"Employees whose salary greater than or equal to 50000 & From IT Dept :"`
);

for (const element of arrayEmployees) {
  if (element.emp_salary >= 50000 && element.emp_dept == "IT") {
    console.log(
      `Employee ID: ${element.emp_id}, Employee Name: ${element.emp_name}, Employee Department: ${element.emp_dept}, Employee Salary: ${element.emp_salary}, Employee Company: ${element.emp_company}`
    );
  }
}

console.log(
  "=============================================================================================================="
);
console.log(
  "Case.06: Displaying the employees all details who is working in Infy company."
);
console.log(`"Employees working in Infy:"`);
for (const element of arrayEmployees) {
  if (element.emp_company == "Infy") {
    console.log(
      `Employee ID: ${element.emp_id}, Employee Name: ${element.emp_name}, Employee Department: ${element.emp_dept}, Employee Salary: ${element.emp_salary}, Employee Company: ${element.emp_company}`
    );
  }
}
