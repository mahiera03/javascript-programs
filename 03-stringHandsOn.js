var string = "  Hey you are doing good, keep it up  ";

function stringHandsOn() {
  //Case 01: Printing String as it on console.
  console.log(`1.The given string is: ${string}`);

  //Case 02: Printing length on log.
  var stringLentgh = string.length;
  console.log(`2.The length of given string is: ${stringLentgh}`);

  //Case 03: Removing the leading and trailing extra spaces and printing on console.
  var stringAfterTrim = string.trim();
  console.log(
    `3.The given string after removing the leading and trailing extra spaces: ${stringAfterTrim}. & The length of string after removing extra spaces: ${stringAfterTrim.length} `
  );

  //Case 04: Printing the length of extra spaces which we have deleted in previous step
  var stringAfterTrimLength = stringAfterTrim.length;
  console.log(
    `4.The length of extra Spaces which we have deleted in previous step: ${
      stringLentgh - stringAfterTrimLength
    }`
  );

  //Case 05: Printing the First and Last Character of trimmed String.
  console.log(
    `5.The first character of trimmed string is: ${stringAfterTrim.charAt(
      0
    )} and also the last character is: ${stringAfterTrim.charAt(
      stringAfterTrim.length - 1
    )} `
  );

  //Case 06: Printing the number of words available in the After trimmend String.
  var newString = stringAfterTrim.split(" ");
  console.log(`6.The words available in new string: ${newString.length}`);

  //Case 07: Printing the index of word "good" from the given string.
  console.log(
    `7.The index of word "good" in given string is:${stringAfterTrim.indexOf(
      "good"
    )}`
  );

  //Case 08: Printing the substring from index 22 byh using substring().
  console.log(
    `8.The substring from index 22 as follows: ${stringAfterTrim.substring(22)}`
  );

  //Case 09: Checking the new trimmed string is ending with word "up".
  console.log(
    `9.Is new trimmed string ends with word "up": ${stringAfterTrim.endsWith(
      "up"
    )}`
  );

  //Case 10: Checking the new trimmed string is start with word "Hey".
  console.log(
    `10.Is new string starts with word "Hey": ${stringAfterTrim.startsWith(
      "Hey"
    )}`
  );
}

stringHandsOn();
