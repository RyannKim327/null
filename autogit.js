function findLongestCommonPrefix(strings) {
  if (strings.length === 0) {
    return "";
  }

  let prefix = "";
  const minString = strings.reduce((min, str) => (str.length < min.length ? str : min));

  for (let i = 0; i < minString.length; i++) {
    const char = minString[i];
    for (const str of strings) {
      if (str[i] !== char) {
        return prefix;
      }
    }
    prefix += char;
  }

  return prefix;
}

// Example usage:
const strings = ["flower", "flow", "flight"];
const longestCommonPrefix = findLongestCommonPrefix(strings);
console.log(longestCommonPrefix);  // Output: "fl"
