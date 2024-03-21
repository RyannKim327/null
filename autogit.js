function findFirstRepeatedChar(inputString) {
    let charMap = {};
    
    for (let char of inputString) {
        if (charMap[char]) {
            return char;
        } else {
            charMap[char] = 1;
        }
    }
    
    return null;
}

let inputString = "hello world";
let repeatedChar = findFirstRepeatedChar(inputString);

if (repeatedChar) {
    console.log("The first repeated character is: " + repeatedChar);
} else {
    console.log("There are no repeated characters in the string.");
}
