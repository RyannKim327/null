function findFirstRepeatedChar(str) {
    const seen = new Set();

    for (const char of str) {
        if (seen.has(char)) {
            return char;
        }
        seen.add(char);
    }

    return null; // No repeated character found
}

const inputStr = "hello world";
const repeatedChar = findFirstRepeatedChar(inputStr);

if (repeatedChar) {
    console.log(`First repeated character in '${inputStr}' is '${repeatedChar}'`);
} else {
    console.log("No repeated characters found in the input string.");
}
