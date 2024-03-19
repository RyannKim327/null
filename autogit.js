function findFirstRepeatedCharacter(str) {
    let charSet = new Set();

    for (let char of str) {
        if (charSet.has(char)) {
            return char;
        } else {
            charSet.add(char);
        }
    }

    return null; // If no repeated character is found
}

// Example of how to use the function
const inputString = "abcdefghiijk";
const firstRepeatedCharacter = findFirstRepeatedCharacter(inputString);

if (firstRepeatedCharacter) {
    console.log(`The first repeated character in ${inputString} is ${firstRepeatedCharacter}`);
} else {
    console.log(`There are no repeated characters in ${inputString}`);
}
