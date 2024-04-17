function reverseString(str) {
    return str.split('').reverse().join('');
}

const originalString = 'Hello, World!';
const reversedString = reverseString(originalString);

console.log(reversedString); // Output: '!dlroW ,olleH'
function reverseString(str) {
    let reversedStr = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversedStr += str[i];
    }
    return reversedStr;
}

const originalString = 'Hello, World!';
const reversedString = reverseString(originalString);

console.log(reversedString); // Output: '!dlroW ,olleH'
