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

let inputString = "hello world";
let repeatedChar = findFirstRepeatedChar(inputString);

if (repeatedChar) {
    console.log(`The first repeated character in "${inputString}" is "${repeatedChar}"`);
} else {
    console.log(`No repeated characters found in "${inputString}"`);
}
