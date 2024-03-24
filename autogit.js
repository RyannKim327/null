function removeVowels(str) {
    return str.replace(/[aeiouAEIOU]/g, "");  // using regex to match all vowels and replacing them with an empty string
}

let originalString = "Hello, World!";
let stringWithoutVowels = removeVowels(originalString);
console.log(stringWithoutVowels);  // Output: "Hll, Wrld!"
