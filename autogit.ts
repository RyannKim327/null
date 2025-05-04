function reverseString(str: string): string {
  return str.split('').reverse().join('');
}

// Example:
console.log(reverseString("hello")); // Output: "olleh"
