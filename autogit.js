function removeVowels(str) {
  return str.replace(/[aeiou]/gi, '');
}

// Example usage
const originalString = 'Hello, World!';
const noVowelsString = removeVowels(originalString);
console.log(noVowelsString); // Output: "Hll, Wrld!"
function removeVowels(str) {
  let result = '';
  for (let i = 0; i < str.length; i++) {
    const char = str[i].toLowerCase();
    if (char !== 'a' && char !== 'e' && char !== 'i' && char !== 'o' && char !== 'u') {
      result += str[i];
    }
  }
  return result;
}

// Example usage
const originalString = 'Hello, World!';
const noVowelsString = removeVowels(originalString);
console.log(noVowelsString); // Output: "Hll, Wrld!"
