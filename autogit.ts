function reverseString(input: string): string {
    return input.split('').reverse().join('');
}

const originalString = "Hello, World!";
const reversedString = reverseString(originalString);

console.log(reversedString); // Output: !dlroW ,olleH
function reverseString(input: string): string {
    return Array.from(input).reverse().join('');
}

const originalString = "Hello, 🌍!";
const reversedString = reverseString(originalString);

console.log(reversedString); // Output: !🌍 ,olleH
