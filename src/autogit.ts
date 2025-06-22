function removeVowels(input: string): string {
    // Define a regular expression to match all vowels (case-insensitive)
    const vowelsRegex = /[aeiou]/gi;

    // Replace all vowels with an empty string
    return input.replace(vowelsRegex, "");
}

// Example usage:
const originalString = "Hello, World!";
const stringWithoutVowels = removeVowels(originalString);
console.log(stringWithoutVowels); // Output: "Hll, Wrld!"
function removeVowels(input: string): string {
    const vowels = "aeiouAEIOU";
    let result = "";

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
