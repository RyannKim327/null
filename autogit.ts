function reverseString(str: string): string {
    return str.split('').reverse().join('');
}

// Example usage:
const originalString = "TypeScript";
const reversedString = reverseString(originalString);
console.log(reversedString); // Output: tpircSeyT
function reverseStringUnicode(str: string): string {
    return Array.from(str).reverse().join('');
}

// Example usage:
const originalStringUnicode = "😊TypeScript";
const reversedStringUnicode = reverseStringUnicode(originalStringUnicode);
console.log(reversedStringUnicode); // Output: tpircSeyT😊
