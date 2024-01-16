function findLongestCommonPrefix(strings) {
  if (strings.length === 0) {
    return "";
  }

  // Sort the strings to ensure the shortest string comes first
  strings.sort();

  let prefix = "";
  const first = strings[0];
  const last = strings[strings.length - 1];
  const minLen = Math.min(first.length, last.length);

  // Find the common prefix between the first and last strings
  for (let i = 0; i < minLen; i++) {
    if (first[i] === last[i]) {
      prefix += first[i];
    } else {
      break;
    }
  }

  return prefix;
}
const strings = ["flower", "flow", "flight"];
const longestPrefix = findLongestCommonPrefix(strings);
console.log(longestPrefix);  // Output: "fl"
