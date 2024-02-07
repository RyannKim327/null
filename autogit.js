function findFirstNonRepeatingChar(string) {
    // Implementation goes here
}
function findFirstNonRepeatingChar(string) {
    const charCount = {};
    // Rest of the code
}
function findFirstNonRepeatingChar(string) {
    const charCount = {};
    for (let char of string) {
        if (charCount[char]) {
            charCount[char]++;
        } else {
            charCount[char] = 1;
        }
    }
    // Rest of the code
}
function findFirstNonRepeatingChar(string) {
    const charCount = {};
    for (let char of string) {
        if (charCount[char]) {
            charCount[char]++;
        } else {
            charCount[char] = 1;
        }
    }

    for (let char of string) {
        if (charCount[char] === 1) {
            return char;
        }
    }

    return null; // If no non-repeating character found
}
const inputString = "abbacdeb";
const firstNonRepeatingChar = findFirstNonRepeatingChar(inputString);
console.log(firstNonRepeatingChar); // Output: 'c'
