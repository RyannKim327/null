function findFirstRepeatedChar(str) {
    const charMap = {};

    for (let char of str) {
        if (charMap[char]) {
            return char;
        } else {
            charMap[char] = true;
        }
    }

    return null;
}

const inputString = "hello world";
const repeatedChar = findFirstRepeatedChar(inputString);

if (repeatedChar) {
    console.log(`The first repeated character in the string is: ${repeatedChar}`);
} else {
    console.log("No repeated characters found in the string.");
}
