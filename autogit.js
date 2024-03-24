function findFirstRepeatedChar(str) {
    let charCount = {};
    
    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        
        if (charCount[char]) {
            return char;
        } else {
            charCount[char] = 1;
        }
    }
    
    return null;
}

// Example usage
let str = "Hello World";
let repeatedChar = findFirstRepeatedChar(str);

if (repeatedChar) {
    console.log("The first repeated character is: " + repeatedChar);
} else {
    console.log("No repeated characters found in the string.");
}
