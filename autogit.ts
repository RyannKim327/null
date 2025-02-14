function reverseString(str: string): string {
    return str.split('').reverse().join('');
}

const originalString = "Hello, World!";
const reversedString = reverseString(originalString);
console.log(reversedString); // Output: "!dlroW ,olleH"
