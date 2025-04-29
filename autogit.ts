function removeVowels(input: string): string {
  return input.replace(/[aeiouAEIOU]/g, '');
}

// Example usage:
const result = removeVowels("Hello, World!");
console.log(result); // "Hll, Wrld!"
