console.log(
  "========================================Assignment on Sort method============================================"
);

console.log("Case:01: Reversing the given array");

const arrayRollNumbers = [113, 45, 56, 11, 32, 45, 109, 799, 56, 45];
const reversedArray = arrayRollNumbers.reverse();
console.log(reversedArray);

console.log(
  "=============================================================================================================="
);

console.log(
  "Case-02: Sorting the given array without passing any arguments and without custom logic."
);

const newArray = arrayRollNumbers.sort();
console.log(newArray);
console.log(
  "=============================================================================================================="
);
console.log(
  "Case-03: Sorting the given array in ascending order with custom logic."
);

const ascendingArray = arrayRollNumbers.sort((n1, n2) => {
  return n1 > n2 ? 1 : -1;
});

console.log("Array in ascending order:");
console.log(ascendingArray);
console.log(
  "=============================================================================================================="
);
console.log("Case-04: Displaying the greatest number from the given array.");
console.log(`Given array is: [${arrayRollNumbers}]`);

console.log(
  `Greatest number of given array is: ${
    ascendingArray[ascendingArray.length - 1]
  }`
);
console.log(
  "=============================================================================================================="
);
console.log("Case-05: Displaying the smallest number from the given array.");
console.log(`Given array is: [${arrayRollNumbers}]`);

console.log(`Smallest number of given array is: ${ascendingArray[0]}`);

console.log(
  "=============================================================================================================="
);
console.log(
  "Case-06: Displaying the unique array elements from the given array by removing duplicate elements."
);
const uniqueArray = [];
for (let index = 0; index < arrayRollNumbers.length; index++) {
  if (uniqueArray.indexOf(arrayRollNumbers[index]) == -1) {
    uniqueArray.push(arrayRollNumbers[index]);
  }
}

console.log("The new unique generated array is:");
console.log(uniqueArray);
