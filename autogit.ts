function reverseWords(str: string): string {
  // Split the string into words by spaces
  const words = str.split(' ');
  // Reverse the array of words
  const reversedWords = words.reverse();
  // Join them back into a single string
  return reversedWords.join(' ');
}

// Example usage:
const input = "TypeScript is awesome";
const output = reverseWords(input);
console.log(output); // "awesome is TypeScript"
