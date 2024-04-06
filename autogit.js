function removeVowels(str) {
    return str.replace(/[aeiouAEIOU]/g, ''); // Using regular expression to match all vowels (both upper and lower case) and replacing them with an empty string
}

// Example usage
const stringWithVowels = 'Hello, World!';
const stringWithoutVowels = removeVowels(stringWithVowels);

console.log(stringWithoutVowels); // Output: 'Hll, Wrld!'
