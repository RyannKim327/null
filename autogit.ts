function getStringLength(str: string): number {
  let count = 0;
  for (const _ of str) {
    count++;
  }
  return count;
}

// Usage:
const length = getStringLength("hello");
console.log(length); // Outputs: 5
function getStringLength(str: string): number {
  let count = 0;
  while (str[count] !== undefined) {
    count++;
  }
  return count;
}
