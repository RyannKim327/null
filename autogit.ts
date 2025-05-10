function longestCommonPrefix(strs: string[]): string {
  if (strs.length === 0) return "";

  // Find the shortest string length, so we don't go out of bounds
  let minLength = Math.min(...strs.map(s => s.length));

  let prefix = "";
  for (let i = 0; i < minLength; i++) {
    // Take the current character of the first string as reference
    const char = strs[0][i];

    // Check if this char is common in all strings at position i
    if (strs.every(s => s[i] === char)) {
      prefix += char; // Add this character to the prefix
    } else {
      break; // Stop at the first mismatch
    }
  }

  return prefix;
}
const words = ["flower", "flow", "flight"];
console.log(longestCommonPrefix(words));  // Output: "fl"
