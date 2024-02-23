function findFirstRepeatedChar(str) {
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

let str = "hello world";
let repeatedChar = findFirstRepeatedChar(str);

if (repeatedChar) {
    console.log("First repeated character: " + repeatedChar);
} else {
    console.log("No repeated characters found");
}
