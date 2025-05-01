function removeVowels(str: string): string {
  return str.replace(/[aeiouAEIOU]/g, '');
}

// Example usage:
const original = "Hello, TypeScript!";
const noVowels = removeVowels(original);
console.log(noVowels); // Hll, TypScrpt!
