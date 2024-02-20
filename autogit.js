function findFirstRepeatedCharacter(str) {
    let charSet = new Set();

    for (let char of str) {
        if (charSet.has(char)) {
            return char;
        }
        charSet.add(char);
    }

    return "No repeated character found.";
}

let inputString = "hello";
let repeatedCharacter = findFirstRepeatedCharacter(inputString);

console.log("The first repeated character is: ", repeatedCharacter);
