function removeVowels(input: string): string {
    return input.replace(/[aeiouAEIOU]/g, '');
}

// Example usage:
const originalString = "Hello, World!";
const result = removeVowels(originalString);
console.log(result); // "Hll, Wrld!"
