function reverseString(str: string): string {
    return str.split('').reverse().join('');
}

const originalString = "Hello, World!";
const reversedString = reverseString(originalString);
console.log(reversedString); // Output: !dlroW ,olleH
function reverseString(str: string): string {
    let reversed = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}

const originalString = "Hello, World!";
const reversedString = reverseString(originalString);
console.log(reversedString); // Output: !dlroW ,olleH
