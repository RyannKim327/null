function reverseString(str) {
    return str.split("").reverse().join("");
}

const reversedString = reverseString("Hello World");
console.log(reversedString); // Output: "dlroW olleH"
function reverseString(str) {
    let reversedString = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversedString += str[i];
    }
    return reversedString;
}

const reversedString = reverseString("Hello World");
console.log(reversedString); // Output: "dlroW olleH"
const reverseString = (str) => str.split("").reduce((reversed, char) => char + reversed, '');

const reversedString = reverseString("Hello World");
console.log(reversedString); // Output: "dlroW olleH"
