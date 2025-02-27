function removeVowels(str: string): string {
    return str.replace(/[aeiouAEIOU]/g, '');
}

// Example usage:
const originalString = "Hello, World!";
const stringWithoutVowels = removeVowels(originalString);
console.log(stringWithoutVowels); // Output: "Hll, Wrld!"
