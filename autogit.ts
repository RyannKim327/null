function removeVowels(input: string): string {
  return input.replace(/[aeiouAEIOU]/g, '');
}

const result = removeVowels("Hello, TypeScript!");
console.log(result); // "Hll, TypScrpt!"
