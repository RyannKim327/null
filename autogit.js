function reverseString(str) {
  // Step 1: Convert the string into an array of characters
  let array = str.split('');

  // Step 2: Reverse the array
  array.reverse();

  // Step 3: Join the array back into a string
  let reversedStr = array.join('');

  // Step 4: Return the reversed string
  return reversedStr;
}

// Example usage
let originalString = "Hello, World!";
let reversedString = reverseString(originalString);
console.log(reversedString);
!dlroW ,olleH
