function findFirstRepeatedChar(str) {
    let visitedChars = {};

    for (let char of str) {
        if (visitedChars[char]) {
            return char;
        } else {
            visitedChars[char] = true;
        }
    }

    return null;
}

// Test the function
let str = "abcdefghiijk";
let firstRepeatedChar = findFirstRepeatedChar(str);
console.log("First repeated character: ", firstRepeatedChar);
