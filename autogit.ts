function removeVowels(input: string): string {
  return input.replace(/[aeiouAEIOU]/g, '');
}

const original = "Hello, TypeScript!";
const result = removeVowels(original);
console.log(result);  // Hll, TpScrpt!
