function reverseString(str) {
    return str.split('').reverse().join('');
}

// Example
const reversed = reverseString('hello');
console.log(reversed); // Output: 'olleh'
function reverseString(str) {
    let reversed = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}

// Example
const reversed = reverseString('hello');
console.log(reversed); // Output: 'olleh'
function reverseString(str) {
    return str.split('').reduce((reversed, char) => char + reversed, '');
}

// Example
const reversed = reverseString('hello');
console.log(reversed); // Output: 'olleh'
