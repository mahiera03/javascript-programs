console.log("Assignment on Sorting Method(Employees Class");

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

console.log(
  "Case-01: Sorting the employees in descending order by emp Id's and displaying the Emp-Id's, Name, Dept etc. "
);

const newEmpArrays = arrayEmployees.sort((e1, e2) => {
  return e1.emp_id < e2.emp_id ? 1 : -1;
});

for (const element of newEmpArrays) {
  console.log(`${element.emp_id}, ${element.emp_name}, ${element.emp_dept}`);
}
console.log(
  "================================================================================================================================="
);
console.log(
  "Case-02: Sorting the employees in Ascending order by emp Dept and displaying the Emp-Id's, Dept, company etc."
);

const newEmpArrays2 = arrayEmployees.sort((e1, e2) => {
  return e1.emp_dept > e2.emp_dept ? 1 : -1;
});

for (const element of newEmpArrays2) {
  console.log(`${element.emp_id}, ${element.emp_dept}, ${element.emp_company}`);
}

console.log(
  "================================================================================================================================="
);

console.log(
  "Case-03: Sorting the employees in descending order by emp salary and displaying the Emp-Name, salary, Company etc. "
);

const newEmpArrays3 = arrayEmployees.sort((e1, e2) => {
  return e1.emp_salary < e2.emp_salary ? 1 : -1;
});

for (const element of newEmpArrays3) {
  console.log(
    `${element.emp_name}, ${element.emp_salary}, ${element.emp_company}`
  );
}
