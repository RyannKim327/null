function removeVowels(str) {
    return str.replace(/[aeiouAEIOU]/g, '');
}

// Example usage
let myString = "Hello, World!";
let result = removeVowels(myString);
console.log(result); // Output: "Hll, Wrld!"
