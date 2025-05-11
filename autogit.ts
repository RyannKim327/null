function reverseWords(input: string): string {
  // Split the string by spaces to get an array of words
  const words = input.split(' ');
  // Reverse the array of words
  const reversedWords = words.reverse();
  // Join them back into a string with spaces
  return reversedWords.join(' ');
}

// Example usage:
const original = "TypeScript is awesome";
const reversed = reverseWords(original);
console.log(reversed);  // Output: "awesome is TypeScript"
function reverseWords(input: string): string {
  return input
    .trim()                       // remove leading/trailing spaces
    .split(/\s+/)                 // split by any number of spaces (regex)
    .reverse()
    .join(' ');
}
