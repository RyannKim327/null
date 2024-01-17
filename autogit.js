function findFirstRepeatedCharacter(str) {
    for (let i = 0; i < str.length; i++) {
        for (let j = i + 1; j < str.length; j++) {
            if (str[i] === str[j]) {
                return str[i];
            }
        }
    }
    return null; // Return null if no repeated character is found
}

const string = "Hello World";
console.log(findFirstRepeatedCharacter(string)); // Output: l
function findFirstRepeatedCharacter(str) {
    const frequency = {};
    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        if (frequency[char]) {
            return char;
        }
        frequency[char] = true;
    }
    return null; // Return null if no repeated character is found
}

const string = "Hello World";
console.log(findFirstRepeatedCharacter(string)); // Output: l
function findFirstRepeatedCharacter(str) {
    const charSet = new Set();
    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        if (charSet.has(char)) {
            return char;
        }
        charSet.add(char);
    }
    return null; // Return null if no repeated character is found
}

const string = "Hello World";
console.log(findFirstRepeatedCharacter(string)); // Output: l
