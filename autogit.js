function findFirstRepeatedChar(str) {
    let charSet = new Set();
    
    for (let char of str) {
        if (charSet.has(char)) {
            return char;
        } else {
            charSet.add(char);
        }
    }
    
    return null; // If no repeated character is found
}

let str = "hello world";
let repeatedChar = findFirstRepeatedChar(str);

if (repeatedChar) {
    console.log("The first repeated character is: " + repeatedChar);
} else {
    console.log("There are no repeated characters in the string.");
}
