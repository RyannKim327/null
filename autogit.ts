function reverseWords(input: string): string {
  return input.split(' ') // Split the string into an array of words
              .reverse()   // Reverse the array of words
              .join(' ');  // Join the reversed array back into a string
}

// Example usage:
const originalString = "Hello World from TypeScript";
const reversedString = reverseWords(originalString);
console.log(reversedString); // Output: "TypeScript from World Hello"
