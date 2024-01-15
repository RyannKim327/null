function reverseWords(str) {
  // Step 1: Split the string into an array of words
  let words = str.split(" ");

  // Step 2: Reverse the array
  words.reverse();

  // Step 3: Join the reversed array into a string
  return words.join(" ");
}

// Example usage
let originalString = "Hello, World!";
let reversedString = reverseWords(originalString);
console.log(reversedString); // Output: "World! Hello,"
