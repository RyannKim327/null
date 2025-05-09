function removeVowels(str: string): string {
  return str.replace(/[aeiouAEIOU]/g, '');
}
const input = "Hello, TypeScript!";
const output = removeVowels(input);
console.log(output); // "Hll, TypScrpt!"
