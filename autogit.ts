function reverseWords(input: string): string {
  return input.split(' ').reverse().join(' ');
}

const original = "Hello this is TypeScript";
const reversed = reverseWords(original);
console.log(reversed); // Output: "TypeScript is this Hello"
