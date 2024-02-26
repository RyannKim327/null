function findFirstRepeatedChar(str) {
    let charMap = {};

    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        
        if (charMap[char]) {
            return char;
        } else {
            charMap[char] = true;
        }
    }

    return null;
}

// Example usage
let inputString = "hello world";
let repeatedChar = findFirstRepeatedChar(inputString);

if (repeatedChar) {
    console.log("The first repeated character is: " + repeatedChar);
} else {
    console.log("No repeated characters found.");
}
