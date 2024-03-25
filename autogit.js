function findFirstRepeatedChar(str) {
    let charMap = {};
    
    for (let char of str) {
        if (charMap[char]) {
            return char;
        } else {
            charMap[char] = true;
        }
    }
    
    return null;
}

let str = "javascript";
let repeatedChar = findFirstRepeatedChar(str);

if (repeatedChar) {
    console.log("The first repeated character is: " + repeatedChar);
} else {
    console.log("There are no repeated characters in the string.");
}
