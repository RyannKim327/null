function reverseString(str) {
    return str.split('').reverse().join('');
}

const str = "Hello, World!";
const reversedStr = reverseString(str);
console.log(reversedStr); // Output: "!dlroW ,olleH"
