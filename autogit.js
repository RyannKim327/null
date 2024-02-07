function removeVowels(str) {
  return str.replace(/[aeiou]/gi, '');
}

const inputString = 'This is a sample string.';
const stringWithoutVowels = removeVowels(inputString);
console.log(stringWithoutVowels); // Output: Ths s smpl strng.
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

const inputString = 'This is a sample string.';
const stringWithoutVowels = removeVowels(inputString);
console.log(stringWithoutVowels); // Output: Ths s smpl strng.
function removeVowels(str) {
  const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];

  const chars = Array.from(str);
  const filteredChars = chars.filter((char) => !vowels.includes(char));

  return filteredChars.join('');
}

const inputString = 'This is a sample string.';
const stringWithoutVowels = removeVowels(inputString);
console.log(stringWithoutVowels); // Output: Ths s smpl strng.
