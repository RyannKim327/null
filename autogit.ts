function longestCommonPrefix(strs: string[]): string {
  if (strs.length === 0) return "";

  // Start assuming the whole first string is the prefix
  let prefix = strs[0];

  for (let i = 1; i < strs.length; i++) {
    // Compare the current prefix with the next string,
    // and trim the prefix in case of mismatch.
    while (strs[i].indexOf(prefix) !== 0) {
      prefix = prefix.slice(0, prefix.length - 1);
      if (prefix === "") return "";
    }
  }

  return prefix;
}
const strings = ["flower", "flow", "flight"];
console.log(longestCommonPrefix(strings)); // Outputs: "fl"
