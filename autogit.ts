function removeVowels(input: string): string {
  return input.replace(/[aeiouAEIOU]/g, '');
}

const example = "Hello, TypeScript!";
console.log(removeVowels(example)); // "Hll, TypScrpt!"
