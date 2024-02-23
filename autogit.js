function firstNonRepeatingChar(str) {
    let charCount = {};

    // Count occurrences of each character
    for (let char of str) {
        if (charCount[char]) {
            charCount[char]++;
        } else {
            charCount[char] = 1;
        }
    }

    // Find the first character with count = 1
    for (let char of str) {
        if (charCount[char] === 1) {
            return char;
        }
    }

    return null; // If no non-repeating character found
}

// Test the function
let str = "hello world";
let firstNonRepeating = firstNonRepeatingChar(str);
console.log("First non-repeating character is:", firstNonRepeating);
