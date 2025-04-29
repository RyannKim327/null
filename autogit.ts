function removeVowels(input: string): string {
  return input.replace(/[aeiou]/gi, '');
}

// Example usage:
const originalString = "Hello, TypeScript!";
const noVowelsString = removeVowels(originalString);
console.log(noVowelsString); // Hll, TsCrpt!
