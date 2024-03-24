function removeVowels(str) {
    return str.replace(/[aeiouAEIOU]/g, '');
}

const originalString = "Hello, World!";
const stringWithoutVowels = removeVowels(originalString);

console.log(stringWithoutVowels); // Output: "Hll, Wrld!"
