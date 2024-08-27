console.log(
  "================================Assignment on Map Method==============================="
);

const arrayNumbers = [20, 11, 40, 25, 23, 11, 9, 31, 60, 2, 19];
console.log(
  "======================================================================================="
);

console.log(
  "Case-01: Adding 10 into each array element and displaying on console. "
);
console.log(
  "======================================================================================="
);
const newArray = arrayNumbers.map((element) => {
  return element + 10;
});
console.log("New Array after adding 10 value:");

console.log(newArray);
console.log(
  "======================================================================================="
);

console.log(
  "Case-02: Doing cube of each array element and displaying on console. "
);
console.log(
  "======================================================================================="
);

const newArray02 = arrayNumbers.map((element) => {
  return element * element * element;
});
console.log("The New cube formed array:");
console.log(newArray02);

console.log(
  "======================================================================================="
);

console.log(
  "Case-03: Adding index value into current array element to generate new array and displaying on console. "
);
console.log(
  "======================================================================================="
);

const newArray03 = arrayNumbers.map((element, index) => {
  return index + element;
});
console.log("The new generated array:");

console.log(newArray03);
