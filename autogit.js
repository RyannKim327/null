function reverseString(str) {
    return str.split("").reverse().join("");
}

const originalString = "Hello, World!";
const reversedString = reverseString(originalString);
console.log(reversedString); // Output: "!dlroW ,olleH"
function reverseString(str) {
    let reversedString = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversedString += str[i];
    }
    return reversedString;
}

const originalString = "Hello, World!";
const reversedString = reverseString(originalString);
console.log(reversedString); // Output: "!dlroW ,olleH"
function reverseString(str) {
    return str.split("").reduce((reversed, char) => char + reversed, "");
}

const originalString = "Hello, World!";
const reversedString = reverseString(originalString);
console.log(reversedString); // Output: "!dlroW ,olleH"
