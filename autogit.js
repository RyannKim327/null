function removeVowels(str) {
    return str.replace(/[aeiouAEIOU]/g, '');
}

// Example
let originalString = "Hello, World!";
let stringWithoutVowels = removeVowels(originalString);

console.log(stringWithoutVowels);  // Output: "Hll, Wrld!"
