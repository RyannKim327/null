function reverseWords(str: string): string {
  return str.split(' ').reverse().join(' ');
}

const input = "Hello world this is TypeScript";
const reversed = reverseWords(input);
console.log(reversed); // Output: "TypeScript is this world Hello"
function reverseWords(str: string): string {
  return str.trim().split(/\s+/).reverse().join(' ');
}
