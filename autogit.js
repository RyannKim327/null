function removeVowels(str) {
    return str.replace(/[aeiouAEIOU]/g, '');
}

let string = 'Hello, World!';
let result = removeVowels(string);
console.log(result);  // Output: "Hll, Wrld!"
