function firstNonRepeatingChar(str) {
    for (let i = 0; i < str.length; i++) {
        let char = str.charAt(i);
        if (str.indexOf(char) === str.lastIndexOf(char)) {
            return char;
        }
    }
    return null; // Return null if there is no non-repeating character
}

let str = "hello world";
let firstNonRepeating = firstNonRepeatingChar(str);

console.log("First non-repeating character: ", firstNonRepeating);
