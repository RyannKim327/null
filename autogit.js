function firstRepeatedCharacter(str) {
    const set = new Set();
  
    for (let char of str) {
        if (set.has(char)) {
            return char;
        } else {
            set.add(char);
        }
    }
  
    return null; // If no repeated character is found
}

const inputString = "hello";
const repeatedChar = firstRepeatedCharacter(inputString);

if (repeatedChar) {
    console.log(`The first repeated character in the string is: ${repeatedChar}`);
} else {
    console.log("No repeated character found in the string.");
}
