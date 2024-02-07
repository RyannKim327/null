function removeVowels(str) {
  return str.replace(/[aeiou]/gi, '');
}

// Example usage
const input = 'Hello, World!';
const output = removeVowels(input);
console.log(output); // Output: "Hll, Wrld!"
function removeVowels(str) {
  const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
  return str.split('').filter(char => !vowels.includes(char)).join('');
}

// Example usage
const input = 'Hello, World!';
const output = removeVowels(input);
console.log(output); // Output: "Hll, Wrld!"
