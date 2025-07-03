function reverseWords(input: string): string {
    return input.split(' ').reverse().join(' ');
}

const originalString = "Hello World from TypeScript";
const reversedString = reverseWords(originalString);
console.log(reversedString); // Output: "TypeScript from World Hello"
