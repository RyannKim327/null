function removeVowels(str) {
  return str.replace(/[aeiou]/gi, '');
}

// Example usage:
var input = 'Hello, world!';
var output = removeVowels(input);
console.log(output); // Output: "Hll, wrld!"
