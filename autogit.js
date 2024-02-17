function findFirstRepeatedChar(str) {
    let charSet = new Set();
    
    for (let char of str) {
        if (charSet.has(char)) {
            return char; // Found the first repeated character
        } else {
            charSet.add(char);
        }
    }
    
    return null; // No repeated characters found
}

let inputString = "abcaebd";
let repeatedChar = findFirstRepeatedChar(inputString);

if (repeatedChar) {
    console.log(`The first repeated character is: ${repeatedChar}`);
} else {
    console.log("No repeated characters found in the string.");
}
