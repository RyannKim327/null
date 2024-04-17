function findFirstRepeatedCharacter(str) {
    let charMap = {};

    for (let char of str) {
        if (charMap[char]) {
            return char;
        } else {
            charMap[char] = 1;
        }
    }

    return null;
}

// Example usage
const inputString = "hello world";
const repeatedChar = findFirstRepeatedCharacter(inputString);

if (repeatedChar) {
    console.log(`The first repeated character in "${inputString}" is "${repeatedChar}".`);
} else {
    console.log(`No repeated characters found in "${inputString}".`);
}
