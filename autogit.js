function findFirstRepeatedChar(str) {
    const charMap = {};

    for (let i = 0; i < str.length; i++) {
        const char = str[i];

        if (charMap[char]) {
            return char;
        }

        charMap[char] = true;
    }

    return null; // Return null if no repeated characters found
}

const inputString = "abcdefghija";
const repeatedChar = findFirstRepeatedChar(inputString);

if (repeatedChar) {
    console.log(`The first repeated character is: ${repeatedChar}`);
} else {
    console.log("No repeated characters found.");
}
