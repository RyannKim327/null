function removeVowels(str) {
    return str.replace(/[aeiouAEIOU]/g, '');
}

let originalString = "Hello, World!";
let newString = removeVowels(originalString);

console.log(newString); // Output: "Hll, Wrld!"
