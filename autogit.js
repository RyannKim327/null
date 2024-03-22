function removeVowels(str) {
    return str.replace(/[aeiouAEIOU]/g, '');
}

// Example usage
const text = "Hello, World!";
const textWithoutVowels = removeVowels(text);
console.log(textWithoutVowels);  // Output: "Hll, Wrld!"
