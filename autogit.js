function removeVowels(str) {
    return str.replace(/[aeiouAEIOU]/g, ''); // The regular expression [aeiouAEIOU] matches all vowels (both lower and uppercase) globally in the string and replaces them with an empty string.
}

let inputString = "Hello, World!";
let result = removeVowels(inputString);

console.log(result); // Output: "Hll, Wrld!"
