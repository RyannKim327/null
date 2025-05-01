function reverseString(str: string): string {
  return str.split('').reverse().join('');
}

// Example usage:
console.log(reverseString("hello")); // Outputs: "olleh"
