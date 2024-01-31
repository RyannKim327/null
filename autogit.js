function removeVowels(str) {
  return str.replace(/[aeiou]/gi, '');
}

// Example usage
const input = "Hello, World!";
const result = removeVowels(input);
console.log(result); // Output: "Hll, Wrld!"
function removeVowels(str) {
  const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
  let result = '';

  for (let i = 0; i < str.length; i++) {
    if (!vowels.includes(str[i])) {
      result += str[i];
    }
  }

  return result;
}

// Example usage
const input = "Hello, World!";
const result = removeVowels(input);
console.log(result); // Output: "Hll, Wrld!"
