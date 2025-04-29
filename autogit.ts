function longestCommonPrefix(strs: string[]): string {
  if (strs.length === 0) return "";

  // Start by assuming the whole first string is the prefix
  let prefix = strs[0];

  for (let i = 1; i < strs.length; i++) {
    // Check the current prefix against the current string
    while (strs[i].indexOf(prefix) !== 0) {
      // If the current prefix is not a prefix of strs[i], shorten it
      prefix = prefix.slice(0, prefix.length - 1);
      if (prefix === "") return ""; // No common prefix
    }
  }

  return prefix;
}
console.log(longestCommonPrefix(["flower","flow","flight"]));  // Output: "fl"
console.log(longestCommonPrefix(["dog","racecar","car"]));     // Output: ""
