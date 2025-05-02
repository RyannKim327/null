function removeVowels(input: string): string {
  return input.replace(/[aeiouAEIOU]/g, '');
}
const original = "Hello, TypeScript!";
const noVowels = removeVowels(original);
console.log(noVowels);  // "Hll, TypScrpt!"
