function longestCommonPrefix(strs: string[]): string {
  if (strs.length === 0) return '';

  // Start with the first string as the prefix
  let prefix = strs[0];

  for (let i = 1; i < strs.length; i++) {
    const currentStr = strs[i];

    // Find the common prefix between prefix and currentStr
    let j = 0;
    while (j < prefix.length && j < currentStr.length && prefix[j] === currentStr[j]) {
      j++;
    }

    // Update prefix
    prefix = prefix.substring(0, j);

    // If at any point prefix becomes empty, no need to continue
    if (prefix === '') break;
  }

  return prefix;
}
const strings = ["flower", "flow", "flight"];
console.log(longestCommonPrefix(strings)); // Output: "fl"

const moreStrings = ["dog", "racecar", "car"];
console.log(longestCommonPrefix(moreStrings)); // Output: ""
