function removeVowels(inputString) {
  // Use a regular expression to match all vowels (both upper and lower case)
  return inputString.replace(/[aeiouAEIOU]/g, '');
}

// Test the function
const inputStr = "Hello World";
const result = removeVowels(inputStr);
console.log(result); // Output: "Hll Wrld"
