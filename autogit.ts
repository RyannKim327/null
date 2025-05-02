function removeVowels(str: string): string {
  return str.replace(/[aeiouAEIOU]/g, '');
}

const input = "Hello, TypeScript!";
const result = removeVowels(input);
console.log(result);  // Output: "Hll, TypScrpt!"
