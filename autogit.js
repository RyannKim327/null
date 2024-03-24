function removeVowels(str) {
    return str.replace(/[aeiouAEIOU]/g, '');
}

let inputString = "Hello, World!";
let outputString = removeVowels(inputString);
console.log(outputString); // Output: "Hll, Wrld!"
