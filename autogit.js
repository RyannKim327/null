function removeVowels(str) {
    return str.replace(/[aeiouAEIOU]/g, '');
}

let inputString = "Hello, World!";
let stringWithoutVowels = removeVowels(inputString);

console.log(stringWithoutVowels); // Output: "Hll, Wrld!"
