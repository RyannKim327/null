function removeVowels(str) {
  return str.replace(/[aeiou]/gi, '');
}
const originalString = 'Hello World!';
const result = removeVowels(originalString);
console.log(result); // Output: Hll Wrld!
