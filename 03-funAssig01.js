//Case-01
console.log(
  "==========Printing two functions(no argument and no return type)========"
);

function demo() {
  console.log("Hello World!");
}

function demo02() {
  console.log("Hello Good Morning");
}

demo();
demo02();

//Case-02
console.log("===========Printing the multiple arguments function===========");
function personDetails(firstName, lastName, collegeName) {
  console.log("My First name is:", firstName);
  console.log("My Last name is:", lastName);
  console.log("My College name is:", collegeName);
}

personDetails("Mahadev", "Erande", "FTC College Sangola");

//Case-03
console.log(
  "=====3 parameters function, Parameters can be added together.====="
);

function addThreeValues(value1, value2, value3) {
  var result = value1 + value2 + value3;
  return result;
}

var finalResult = addThreeValues(10.23, 600, 40);
console.log("The addition of three values is:", finalResult);

var finalResult = addThreeValues("Hello ", "Good ", "Morning");
console.log("The addition of three values is:", finalResult);
