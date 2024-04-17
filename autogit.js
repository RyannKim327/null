function removeVowels(str) {
    return str.replace(/[aeiouAEIOU]/g, '');
}

let input = "Hello World!";
let result = removeVowels(input);

console.log(result); // Output: "Hll Wrld!"
