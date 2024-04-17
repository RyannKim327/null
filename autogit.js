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
    
    return null;
}

let str = "Hello World";
let repeatedChar = findFirstRepeatedCharacter(str);

if (repeatedChar) {
    console.log("The first repeated character is: " + repeatedChar);
} else {
    console.log("No repeated characters found in the string.");
}
