function removeVowels(input: string): string {
    // Use a regular expression to match all vowels (case-insensitive)
    return input.replace(/[aeiouAEIOU]/g, '');
}

// Example usage:
const originalString = "Hello, World!";
const stringWithoutVowels = removeVowels(originalString);

console.log(stringWithoutVowels); // Output: "Hll, Wrld!"
function removeVowels(input: string): string {
    const vowels = 'aeiouAEIOU';
    return input
        .split('') // Split the string into an array of characters
        .filter(char => !vowels.includes(char)) // Remove vowels
        .join(''); // Join the remaining characters back into a string
}

// Example usage:
const originalString = "Hello, World!";
const stringWithoutVowels = removeVowels(originalString);

console.log(stringWithoutVowels); // Output: "Hll, Wrld!"
function removeVowels(input: string): string {
    return input.replace(/[aeiouAEIOU]/g, '');
}
