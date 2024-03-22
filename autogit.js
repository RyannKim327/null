function firstRepeatedCharacter(str) {
    let map = {};
    
    for (let char of str) {
        if (map[char]) {
            return char;
        } else {
            map[char] = 1;
        }
    }
    
    return null;
}

// Test the function
let str = "hello world";
let repeatedChar = firstRepeatedCharacter(str);

if (repeatedChar) {
    console.log("The first repeated character is: " + repeatedChar);
} else {
    console.log("No repeated characters found in the string.");
}
