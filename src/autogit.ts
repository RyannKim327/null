function reverseWords(sentence: string): string {
  return sentence.split(' ').reverse().join(' ');
}

// Example usage:
const myString = "Hello world this is TypeScript";
const reversed = reverseWords(myString);
console.log(reversed);  // Output: "TypeScript is this world Hello"
function reverseWords(sentence: string): string {
  return sentence.trim().split(/\s+/).reverse().join(' ');
}
