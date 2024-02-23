function removeVowels(str) {
    return str.replace(/[aeiouAEIOU]/g, '');
}

// Example usage
let string = 'Hello, World!';
let stringWithoutVowels = removeVowels(string);
console.log(stringWithoutVowels); // Output: 'Hll, Wrld!'
