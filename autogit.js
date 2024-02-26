function reverseString(str) {
    return str.split('').reverse().join('');
}

let originalString = 'hello';
let reversedString = reverseString(originalString);

console.log(reversedString); // Output: 'olleh'
