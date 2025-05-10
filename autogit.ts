function removeVowels(input: string): string {
    return input.replace(/[aeiouAEIOU]/g, '');
}

const originalString = "Hello, how are you?";
const stringWithoutVowels = removeVowels(originalString);
console.log(stringWithoutVowels); // "Hll, hw r y?"
