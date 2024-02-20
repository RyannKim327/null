function removeVowels(input) {
  return input.replace(/[aeiouAEIOU]/g, '');
}

let inputString = 'Hello World';
let result = removeVowels(inputString);
console.log(result); // Output: 'Hll Wrld'
