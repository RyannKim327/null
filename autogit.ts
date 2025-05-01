function reverseString(str: string): string {
  return str.split('').reverse().join('');
}

const original = "hello";
const reversed = reverseString(original);
console.log(reversed); // outputs: "olleh"
