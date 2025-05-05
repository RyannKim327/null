function removeVowels(str: string): string {
  return str.replace(/[aeiouAEIOU]/g, '');
}

// Example:
const result = removeVowels("Hello, TypeScript!");
console.log(result);  // "Hll, TpScrpt!"
