function removeVowels(string) {
  // Define the vowels to remove
  const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];

  // Use regex to replace vowels with an empty string
  return string.replace(new RegExp(vowels.join('|'), 'g'), '');
}

// Example usage
const inputString = 'Hello World';
const resultString = removeVowels(inputString);
console.log(resultString);  // Output: "Hll Wrld"
