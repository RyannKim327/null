function reverseWords(str: string): string {
  return str.split(' ').reverse().join(' ');
}

// Example:
const original = "Hello world this is TypeScript";
const reversed = reverseWords(original);
console.log(reversed); // "TypeScript is this world Hello"
function reverseWords(str: string): string {
  return str.trim().split(/\s+/).reverse().join(' ');
}
