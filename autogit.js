function findFirstRepeatedCharacter(str) {
    let charMap = {};

    for (let char of str) {
        if (charMap[char]) {
            return char;
        } else {
            charMap[char] = true;
        }
    }

    return null; // If no repeated character found
}

let inputString = "hello world";
let repeatedChar = findFirstRepeatedCharacter(inputString);

if (repeatedChar) {
    console.log("The first repeated character is: " + repeatedChar);
} else {
    console.log("No repeated character found in the string.");
}
