console.log(
  "====================================================Assignment on forEach Loop===================================================="
);
const arrayNumbers = [1, -7, 40, 502, -77, 91, 0, 108, 89, -601];
console.log(
  "Case-01: Displaying the array element with its index using forEach loop with arrow function:"
);
console.log(
  "======================================================================================="
);

arrayNumbers.forEach((element, index) => {
  console.log(`Index No:${index},Element:${element}`);
});
console.log(
  "======================================================================================="
);
console.log(
  "Case-02.a: Displaying the positive array elements using forEach loop with arrow function:"
);
console.log(
  "======================================================================================="
);
console.log("Positive numbers are:");
arrayNumbers.forEach((element) => {
  if (element >= 0) {
    console.log(element);
  }
});

console.log(
  "======================================================================================="
);
console.log(
  "Case-03: Displaying the negative elements in new array using forEach loop with arrow function:"
);
console.log(
  "======================================================================================="
);
let negArray = [];

arrayNumbers.forEach((element) => {
  if (element < 0) {
    negArray.push(element);
  }
});

negArray.forEach((element) => {
  console.log(element);
});

console.log(
  "======================================================================================="
);
console.log(
  "Case-04: Displaying the even elements using forEach loop with arrow function:"
);
console.log(
  "======================================================================================="
);
console.log("The even numbers as folows:");

arrayNumbers.forEach((element) => {
  if (element % 2 == 0) {
    console.log(element);
  }
});

console.log(
  "======================================================================================="
);
console.log("Case-05: Displaying the sum of all array elements.");
console.log(
  "======================================================================================="
);
let sum = 0;
arrayNumbers.forEach((element) => {
  sum = sum + element;
});

console.log(`sum of the given array is:${sum}`);

console.log(
  "======================================================================================="
);
console.log(
  "Case-06: Displaying the even indexed array value using forEach() loop and arrow function."
);
console.log(
  "======================================================================================="
);
console.log("Even indexed array values are:");

arrayNumbers.forEach((element, index) => {
  if (index % 2 == 0) {
    console.log(`Index No:${index},Element:${element}`);
  }
});
