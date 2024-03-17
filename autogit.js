function findFirstRepeatedCharacter(inputString) {
    const charCount = {};
    
    for (let char of inputString) {
        if (charCount[char]) {
            return char;
        }
        
        charCount[char] = true;
    }
    
    return null;
}

const inputString = "abcdefgah";
const repeatedChar = findFirstRepeatedCharacter(inputString);

if (repeatedChar) {
    console.log(`The first repeated character in the string "${inputString}" is: ${repeatedChar}`);
} else {
    console.log("There are no repeated characters in the string.");
}
