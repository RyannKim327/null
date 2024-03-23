function findFirstRepeatedChar(str) {
    let charSet = new Set();

    for (let char of str) {
        if (charSet.has(char)) {
            return char;
        } else {
            charSet.add(char);
        }
    }

    return null;
}

// Example usage
let inputString = "hello world";
let repeatedChar = findFirstRepeatedChar(inputString);

if (repeatedChar) {
    console.log("The first repeated character in the string is:", repeatedChar);
} else {
    console.log("There are no repeated characters in the string.");
}
