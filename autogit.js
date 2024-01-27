function removeVowels(str) {
  return str.replace(/[aeiou]/gi, '');
}

const input = 'Hello, World!';
const output = removeVowels(input);
console.log(output); // Output: Hll, Wrld!
function removeVowels(str) {
  let result = '';
  const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];

  for (let i = 0; i < str.length; i++) {
    if (!vowels.includes(str[i])) {
      result += str[i];
    }
  }

  return result;
}

const input = 'Hello, World!';
const output = removeVowels(input);
console.log(output); // Output: Hll, Wrld!
