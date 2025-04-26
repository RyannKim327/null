function removeVowels(input: string): string {
    // Regular expression pattern to match vowels (case insensitive)
    const vowelsRegex = /[aeiouAEIOU]/g;
    
    // Replace vowels with an empty string
    return input.replace(vowelsRegex, '');
}

// Example usage
const originalString = "Hello, World!";
const stringWithoutVowels = removeVowels(originalString);
console.log(stringWithoutVowels); // Output: "Hll, Wrld!"
