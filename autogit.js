function findFirstRepeatedCharacter(str) {
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

let str = "hello world";
let repeatedChar = findFirstRepeatedCharacter(str);

if (repeatedChar) {
    console.log("The first repeated character is:", repeatedChar);
} else {
    console.log("No repeated characters found in the string.");
}
