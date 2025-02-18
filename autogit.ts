function removeVowels(inputString: string): string {
    return inputString.replace(/[aeiouAEIOU]/g, '');
}

// Example usage:
const originalString = "Hello World";
const stringWithoutVowels = removeVowels(originalString);
console.log(stringWithoutVowels); // Hll Wrld
