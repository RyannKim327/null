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

const str = "hello world";
const repeatedChar = findFirstRepeatedChar(str);

if (repeatedChar) {
    console.log(`The first repeated character is: ${repeatedChar}`);
} else {
    console.log("No repeated characters found in the string");
}
