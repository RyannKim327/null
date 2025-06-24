function removeVowels(input: string): string {
    // Use a regular expression to match all vowels (case-insensitive)
    return input.replace(/[aeiou]/gi, '');
}

// Example usage:
const originalString = "Hello, World!";
const stringWithoutVowels = removeVowels(originalString);

console.log(stringWithoutVowels); // Output: "Hll, Wrld!"
function removeVowels(input: string): string {
    const vowels = 'aeiouAEIOU';
    let result = '';

    for (const char of input) {
        if (!vowels.includes(char)) {
            result += char;
        }
    }

    return result;
}

// Example usage:
const originalString = "Hello, World!";
const stringWithoutVowels = removeVowels(originalString);

console.log(stringWithoutVowels); // Output: "Hll, Wrld!"
function removeVowels(input: string): string {
    return input.replace(/[aeiou]/gi, '');
}
