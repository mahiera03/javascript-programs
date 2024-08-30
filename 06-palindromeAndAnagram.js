console.log(`Case-01: Check the given string is palindrome or not.`);

function isPalindrome(str) {
  str = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  return str === str.split("").reverse().join("");
}
let words = ["madam", "dad", "hello"];
words.forEach((word) => {
  if (isPalindrome(word)) {
    console.log(`${word} is a palindrome`);
  } else {
    console.log(`${word} is not a palindrome`);
  }
});

console.log(
  "==========================================================================================="
);

console.log(`Case-02: Check the given string is Anagram or not.`);

function areAnagrams(str1, str2) {
  const cleanString = (str) =>
    str.replace(/\s+/g, "").toLowerCase().split("").sort().join("");
  const sortedStr1 = cleanString(str1);
  const sortedStr2 = cleanString(str2);
  return sortedStr1 === sortedStr2;
}
function checkAnagrams(pair1, pair2) {
  const result = areAnagrams(pair1, pair2);
  console.log(
    `"${pair1}" and "${pair2}" are ${result ? "anagrams" : "not anagrams"}.`
  );
}
checkAnagrams("silent", "listen");
checkAnagrams("Hello", "world");
checkAnagrams("Such", "much");
