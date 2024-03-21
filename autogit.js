function findFirstRepeatedCharacter(inputString) {
    const seenCharacters = new Set();
    
    for (const char of inputString) {
        if (seenCharacters.has(char)) {
            return char;
        }
        
        seenCharacters.add(char);
    }
    
    return null; // if no repeated character is found
}

const input = "hello world";
const repeatedChar = findFirstRepeatedCharacter(input);

if (repeatedChar) {
    console.log(`The first repeated character is: ${repeatedChar}`);
} else {
    console.log("No repeated character found.");
}
