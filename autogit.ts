function removeVowels(str: string): string {
  return str.replace(/[aeiouAEIOU]/g, '');
}

// Example usage:
const result = removeVowels('Hello, World!');
console.log(result); // "Hll, Wrld!"
