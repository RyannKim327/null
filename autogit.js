function findFirstRepeatedCharacter(str) {
    let charMap = {};

    for (let i = 0; i < str.length; i++) {
        let char = str.charAt(i);

        if (char in charMap) {
            return char;
        } else {
            charMap[char] = true;
        }
    }

    return null; // If no repeated character is found
}

// Example usage
let inputString = "hello world";
let result = findFirstRepeatedCharacter(inputString);

if (result) {
    console.log("The first repeated character is: " + result);
} else {
    console.log("No repeated character found in the string.");
}
