function removeVowels(str) {
    return str.replace(/[aeiouAEIOU]/g, '');
}

// Example usage
const inputString = 'Hello, World!';
const result = removeVowels(inputString);
console.log(result); // Output: "Hll, Wrld!"
