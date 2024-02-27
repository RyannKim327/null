function findFirstRepeatedChar(str) {
    let charCount = {};

    for (let char of str) {
        if (charCount[char]) {
            return char;
        } else {
            charCount[char] = 1;
        }
    }

    return null;
}

let inputString = "hello world";
let firstRepeatedChar = findFirstRepeatedChar(inputString);

if (firstRepeatedChar) {
    console.log(`The first repeated character is: ${firstRepeatedChar}`);
} else {
    console.log("No repeated characters found in the string.");
}
