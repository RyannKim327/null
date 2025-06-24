function removeVowels(input: string): string {
    // Define a regex pattern to match vowels (case-insensitive)
    const vowelsRegex = /[aeiou]/gi;

    // Replace all matches with an empty string
    return input.replace(vowelsRegex, '');
}

// Example usage:
const result = removeVowels("Hello World!");
console.log(result); // Output: "Hll Wrld!"
function removeVowels(input: string): string {
    // Define a set of vowels for quick lookup
    const vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);

    // Filter out vowels by checking each character
    return input.split('').filter(char => !vowels.has(char)).join('');
}

// Example usage:
const result = removeVowels("Hello World!");
console.log(result); // Output: "Hll Wrld!"
