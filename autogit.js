function findFirstRepeatedCharacter(str) {
    let charMap = {};
    
    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        
        if (charMap[char]) {
            return char;
        } else {
            charMap[char] = true;
        }
    }
    
    return null; // If no repeated characters are found
}

// Example usage
let str = "hello world";
let firstRepeatedChar = findFirstRepeatedCharacter(str);

if (firstRepeatedChar) {
    console.log("The first repeated character is: " + firstRepeatedChar);
} else {
    console.log("No repeated characters found in the string.");
}
