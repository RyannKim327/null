function reverseWords(input: string): string {
  return input.split(' ').reverse().join(' ');
}
const sentence = "Hello world from TypeScript";
console.log(reverseWords(sentence)); // Output: "TypeScript from world Hello"
