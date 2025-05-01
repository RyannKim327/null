function longestCommonPrefix(strs: string[]): string {
  if (strs.length === 0) return "";

  // Start with the first string as the prefix
  let prefix = strs[0];

  for (let i = 1; i < strs.length; i++) {
    // Compare prefix with the next string and shorten it as needed
    while (!strs[i].startsWith(prefix)) {
      prefix = prefix.slice(0, prefix.length - 1);
      if (prefix === "") return ""; // No common prefix
    }
  }

  return prefix;
}
console.log(longestCommonPrefix(["flower", "flow", "flight"])); // Output: "fl"
console.log(longestCommonPrefix(["dog", "racecar", "car"]));    // Output: ""
