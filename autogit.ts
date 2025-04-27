function removeVowels(input: string): string {
    return input.replace(/[aeiouAEIOU]/g, '');
}

// Example usage
const originalString = "Hello TypeScript!";
const stringWithoutVowels = removeVowels(originalString);
console.log(stringWithoutVowels); // Output: "Hll TyprScrpt!"
