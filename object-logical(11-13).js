console.log(
 "11. How to convert an Object {} to an Array [] of key-value pairs in JavaScript?"
);
console.log(" i) Using Object.entries()");

const obj = {
  key1: "value1",
  key2: "value2",
  key3: "value3",
};

const entries = Object.entries(obj);
console.table(entries);

console.log(" ii) Using Object.keys()");
const obj2 = {
  key1: "value1",
  key2: "value2",
  key3: "value3",
};

const entries2 = Object.keys(obj2).map((key) => [key, obj2[key]]);
console.table(entries2);

console.log("12.  How to check if a value is object-like in JavaScript?");
function isObjectLike(value) {
  return typeof value == "object" && value != null;
}

console.log(isObjectLike({}));
console.log(isObjectLike([]));
console.log(isObjectLike(null));
console.log(isObjectLike(42));
console.log(isObjectLike('string'));

console.log("13. How to use a variable for a key in a JavaScript object literal?");

let key = 'name';
let value='John Doe';
let obj3={
[key]:value
};
console.log(obj3);
