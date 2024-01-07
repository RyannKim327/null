function findFirstRepeatedCharacter(str) {
    const charMap = {};

    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        if (charMap[char]) {
            return char;
        } else {
            charMap[char] = true;
        }
    }

    return null; // No repeated character found
}
const str = "Hello, World!";
const repeatedChar = findFirstRepeatedCharacter(str);

if (repeatedChar) {
    console.log("First repeated character:", repeatedChar);
} else {
    console.log("No repeated character found.");
}
