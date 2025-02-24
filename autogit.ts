function removeVowels(input: string): string {
    return input.replace(/[aeiouAEIOU]/g, '');
}

// Example usage:
const originalString = "Hello, World!";
const stringWithoutVowels = removeVowels(originalString);
console.log(stringWithoutVowels);  // Hll, Wrld!
