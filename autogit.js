function firstNonRepeatingChar(str) {
  let charCount = {};
  
  // Count occurrences of each character
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    charCount[char] = (charCount[char] || 0) + 1;
  }
  
  // Find the first non-repeating character
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (charCount[char] === 1) {
      return char;
    }
  }
  
  return null; // If no non-repeating character found
}

// Test the function
let str = "hello world";
let result = firstNonRepeatingChar(str);

console.log("First non-repeating character:", result);
