function removeVowels(str) {
    return str.replace(/[aeiouAEIOU]/g, '');
}

let inputString = "Hello, World!";
let result = removeVowels(inputString);
console.log(result);
