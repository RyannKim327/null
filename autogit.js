function removeVowels(str) {
    return str.replace(/[aeiouAEIOU]/g, '');
}

let originalString = "Hello, World!";
let stringWithoutVowels = removeVowels(originalString);

console.log(stringWithoutVowels); // Output: "Hll, Wrld!"
