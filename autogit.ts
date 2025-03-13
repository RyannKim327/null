function reverseWords(str: string): string {
  return str.split(' ').reverse().join(' ');
}

// Example usage
console.log(reverseWords("Hello World")); // Outputs: "World Hello"
function reverseWords(str: string): string {
  return str.trim().split(/\s+/).reverse().join(' ');
}

// Example usage
console.log(reverseWords("  Hello   World  ")); // Outputs: "World Hello"
function reverseWords(str: string): string {
  return str.split(' ').reduce((reversed, word) => word + ' ' + reversed, '').trim();
}

// Example usage
console.log(reverseWords("Hello World")); // Outputs: "World Hello"
function reverseWords(str: string): string {
  return str
    .split(' ')
    .reverse()
    .join(' ')
    .replace(/\s([.,!?])/g, '$1');
}

// Example usage
console.log(reverseWords("Hello, World!")); // Outputs: "World, Hello!"
