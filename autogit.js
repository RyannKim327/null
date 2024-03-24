function reverseString(str) {
    return str.split('').reverse().join('');
}

var originalString = 'Hello, world!';
var reversedString = reverseString(originalString);

console.log(reversedString); // Output: '!dlrow ,olleH'
