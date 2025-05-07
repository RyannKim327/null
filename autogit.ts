function countChar(str: string, charToCount: string): number {
  let count = 0;
  for (const char of str) {
    if (char === charToCount) count++;
  }
  return count;
}

console.log(countChar("hello world", "l")); // Output: 3
function countChar(str: string, charToCount: string): number {
  return str.split(charToCount).length - 1;
}

console.log(countChar("hello world", "l")); // Output: 3
function countChar(str: string, charToCount: string): number {
  const regex = new RegExp(charToCount, "g");
  const matches = str.match(regex);
  return matches ? matches.length : 0;
}

console.log(countChar("hello world", "l")); // Output: 3
