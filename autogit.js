function removeVowels(str) {
    return str.replace(/[aeiouAEIOU]/g, '');
}

const inputString = "Hello, World!";
const stringWithoutVowels = removeVowels(inputString);

console.log(stringWithoutVowels); // Output: "Hll, Wrld!"
