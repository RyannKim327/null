function removeVowels(str: string): string {
  return str.replace(/[aeiouAEIOU]/g, '');
}

const result = removeVowels("Hello, TypeScript!");
console.log(result); // "Hll, TypScrpt!"
