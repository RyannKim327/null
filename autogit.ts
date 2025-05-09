function removeVowels(str: string): string {
  return str.replace(/[aeiouAEIOU]/g, '');
}

const example = "Hello, TypeScript!";
console.log(removeVowels(example));  // "Hll, TpScrpt!"
