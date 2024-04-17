function removeVowels(str) {
    return str.replace(/[aeiouAEIOU]/g, '');
}

const inputString = "Hello, World!";
const outputString = removeVowels(inputString);

console.log(outputString); // Output: "Hll, Wrld!"
