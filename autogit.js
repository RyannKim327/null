function reverseString(str) {
  // Step 1: Split the string into an array of characters
  let charArray = str.split('');
  
  // Step 2: Reverse the order of the array elements
  let reversedArray = charArray.reverse();
  
  // Step 3: Join the elements of the array into a string
  let reversedStr = reversedArray.join('');
  
  // Step 4: Return the reversed string
  return reversedStr;
}

// Example usage
let str = "Hello, World!";
let reversed = reverseString(str);
console.log(reversed); // Output: "!dlroW ,olleH"
