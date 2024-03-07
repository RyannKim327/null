function removeVowels(str) {
    return str.replace(/[aeiouAEIOU]/g, '');
}

// Example
let text = "Hello, World!";
let result = removeVowels(text);
console.log(result); // Output: "Hll, Wrld!"
