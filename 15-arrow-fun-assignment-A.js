console.log(
  "Case-01: Printing the message on console without argument and no return value function using Arrow Function"
);

let greet = () => {
  console.log(`"Good Morning, Today is Monday"`);
};
greet();
console.log(
  "=============================================================================================================="
);

console.log(
  "Case-02: Printing the message on console with arguments and no return value function using Arrow Function"
);
console.log(
  "======================================================Case 02.a:======================================================"
);

let multiplication = (n1, n2, n3 = 1) => {
  console.log(`Multiplication of given number is: ${n1 * n2 * n3}`);
};
multiplication(5, 5, 2);
console.log(
  "======================================================Case 02.b:======================================================"
);

multiplication(10, 4);

console.log(
  "=============================================================================================================="
);

console.log(
  "Case-03: Printing the message on console with arguments and  return value function using Arrow Function"
);

let additon = (p1, p2, p3, p4, p5) => {
  console.log(`The Given arguments are: ${p1},${p2},${p3},${p4},${p5}`);
  return p1 + p2 + p3 + p4 + p5;
};
console.log(
  "======================================================Case 03.a:======================================================"
);
let op1 = additon(10, 20, 30, 40, 50);
console.log(`The addition of given number is:${op1} `);
console.log(
  "======================================================Case 03.c:======================================================"
);

let op2 = additon(" I am", " learning", " ES6", " features", " In depth");
console.log(`The combination of given parameters are: ${op2}`);
