function firstRepeatedChar(str) {
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

let inputString = "hello world";
let repeatedChar = firstRepeatedChar(inputString);

if (repeatedChar) {
    console.log(`The first repeated character is: ${repeatedChar}`);
} else {
    console.log("No repeated characters found in the string.");
}
