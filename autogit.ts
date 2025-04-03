function removeVowels(str: string): string {
    return str.replace(/[aeiouAEIOU]/g, '');
}

const inputString = "Hello, World!";
const result = removeVowels(inputString);

console.log(result); // Output: "Hll, Wrld!"
