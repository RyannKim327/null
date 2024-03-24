function reverseString(str) {
    return str.split("").reverse().join("");
}

// Example
const myString = "Hello, World!";
const reversedString = reverseString(myString);
console.log(reversedString); // Outputs: "!dlroW ,olleH"
