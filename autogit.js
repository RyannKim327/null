function findFirstNonRepeatingChar(str) {
    let charMap = {};
  
    // Create a map to store the count of each character in the string
    for (let char of str) {
        charMap[char] = (charMap[char] || 0) + 1;
    }
  
    // Find the first character with count 1 in the map
    for (let char of str) {
        if (charMap[char] === 1) {
            return char;
        }
    }
  
    return null; // Return null if there is no non-repeating character
}

// Test the function
let str = "hello world";
let firstNonRepeatingChar = findFirstNonRepeatingChar(str);

if (firstNonRepeatingChar) {
    console.log(`The first non-repeating character in "${str}" is: ${firstNonRepeatingChar}`);
} else {
    console.log("There is no non-repeating character in the string.");
}
