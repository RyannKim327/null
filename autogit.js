function firstNonRepeatingChar(str) {
    for (let i = 0; i < str.length; i++) {
        let char = str.charAt(i);
        if (str.indexOf(char) == i && str.indexOf(char, i + 1) == -1) {
            return char;
        }
    }
    return null;
}

// Test the function
let str = "hello world";
let firstNonRepeatChar = firstNonRepeatingChar(str);
console.log("The first non-repeating character in '" + str + "' is: " + firstNonRepeatChar);
