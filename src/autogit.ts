function removeVowels(input: string): string {
    // Define a regex pattern to match vowels (case-insensitive)
    const vowelsRegex = /[aeiou]/gi;

    // Replace all vowels in the input string with an empty string
    return input.replace(vowelsRegex, '');
}

// Example usage:
const originalString = "Hello, World!";
const result = removeVowels(originalString);
console.log(result); // Output: "Hll, Wrld!"
function removeVowels(input: string): string {
    // Define a set of vowels for quick lookup
    const vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);

    // Filter out vowels and join the remaining characters
    return input.split('').filter(char => !vowels.has(char)).join('');
}

// Example usage:
const originalString = "Hello, World!";
const result = removeVowels(originalString);
console.log(result); // Output: "Hll, Wrld!"
