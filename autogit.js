function longestCommonPrefix(strings) {
  if (strings.length === 0) {
    return "";
  }
  
  let prefix = strings[0];
  
  for (let i = 1; i < strings.length; i++) {
    // Check if the current prefix is a prefix of the next string
    while (strings[i].indexOf(prefix) !== 0) {
      // If not, remove the last character from the prefix and try again
      prefix = prefix.substring(0, prefix.length - 1);
      
      // If the prefix becomes empty, there is no common prefix
      if (prefix === "") {
        return "";
      }
    }
  }
  
  return prefix;
}
const strings = ["flower", "flow", "flight"];
const commonPrefix = longestCommonPrefix(strings);

console.log(commonPrefix); // Output: "fl"
