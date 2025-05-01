function reverseString(str: string): string {
  return str.split('').reverse().join('');
}
console.log(reverseString("hello"));  // Outputs: "olleh"
