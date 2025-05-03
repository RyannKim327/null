function removeVowels(input: string): string {
  return input.replace(/[aeiou]/gi, '');
}

// Example usage:
const result = removeVowels("Hello, World!");
console.log(result); // "Hll, Wrld!"
