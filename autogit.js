function findFirstNonRepeatingCharacter(str) {
    for (let i = 0; i < str.length; i++) {
        let char = str.charAt(i);
        if (str.indexOf(char) === i && str.indexOf(char, i + 1) === -1) {
            return char;
        }
    }
    return null;
}

// Example usage
let inputString = "hello";
let firstNonRepeatingChar = findFirstNonRepeatingCharacter(inputString);
console.log("The first non-repeating character in the string is: " + firstNonRepeatingChar);
