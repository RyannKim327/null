function findFirstRepeatedChar(str) {
    let charMap = {};
    
    for (let char of str) {
        if (charMap[char]) {
            return char;
        } else {
            charMap[char] = true;
        }
    }
    
    return null; // If there are no repeated characters
}

let inputString = "hello world";
let firstRepeatedChar = findFirstRepeatedChar(inputString);

if (firstRepeatedChar) {
    console.log("The first repeated character is: " + firstRepeatedChar);
} else {
    console.log("There are no repeated characters in the string.");
}
