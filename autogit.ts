function reverseWords(input: string): string {
  return input.split(' ').reverse().join(' ');
}

// Example usage:
const original = "The quick brown fox";
const reversed = reverseWords(original);
console.log(reversed); // Output: "fox brown quick The"
function reverseWords(input: string): string {
  return input.trim().split(/\s+/).reverse().join(' ');
}
