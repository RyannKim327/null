function findFirstRepeatedChar(str) {
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

const inputString = "hello world";
const result = findFirstRepeatedChar(inputString);

if (result) {
    console.log(`The first repeated character in the string is: ${result}`);
} else {
    console.log("No repeated character found in the string.");
}
