function reverseWords(input: string): string {
  return input.split(' ').reverse().join(' ');
}

const original = "Hello world from TypeScript";
const reversed = reverseWords(original);
console.log(reversed);  // Output: "TypeScript from world Hello"
function reverseWords(input: string): string {
  return input.trim().split(/\s+/).reverse().join(' ');
}
