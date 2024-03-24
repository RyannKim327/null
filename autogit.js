function reverseString(str) {
    return str.split("").reverse().join("");
}

var originalString = "Hello, World!";
var reversedString = reverseString(originalString);

console.log(reversedString); // Output: "!dlroW ,olleH"
