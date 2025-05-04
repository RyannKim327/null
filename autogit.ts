function countChar(str: string, charToCount: string): number {
  return str.split('').filter(char => char === charToCount).length;
}

// Example:
const text = "hello world";
const count = countChar(text, 'l');
console.log(count); // Output: 3
function countCharIgnoreCase(str: string, charToCount: string): number {
  const lowerStr = str.toLowerCase();
  const lowerChar = charToCount.toLowerCase();
  return lowerStr.split('').filter(char => char === lowerChar).length;
}
