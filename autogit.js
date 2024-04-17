function findFirstNonRepeatingCharacter(str) {
    for (let i = 0; i < str.length; i++) {
        let char = str.charAt(i);
        if (str.indexOf(char) === i && str.indexOf(char, i + 1) === -1) {
            return char;
        }
    }
    return null;
}

let str = "hello world";
let firstNonRepeatingChar = findFirstNonRepeatingCharacter(str);

if (firstNonRepeatingChar) {
    console.log("The first non-repeating character is: " + firstNonRepeatingChar);
} else {
    console.log("All characters are repeating in the string.");
}
