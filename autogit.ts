function findFirstRepeatedCharacter(str: string): string | null {
  const seen = new Set<string>();
  for (let char of str) {
    if (seen.has(char)) {
      return char;
    }
    seen.add(char);
  }
  return null;
}
const str = "abcdefgabc";
const firstRepeatedChar = findFirstRepeatedCharacter(str);
console.log(firstRepeatedChar); // Output: "a"
function findFirstRepeatedCharacter(str: string): string | null {
  const charCount = {};
  for (let char of str) {
    if (charCount[char]) {
      return char;
    }
    charCount[char] = true;
  }
  return null;
}
