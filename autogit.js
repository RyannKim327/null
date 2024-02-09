function findLongestCommonPrefix(strings) {
  if (strings.length === 0) {
    return '';
  }

  let prefix = strings[0];
  for (let i = 1; i < strings.length; i++) {
    while (!strings[i].startsWith(prefix)) {
      prefix = prefix.slice(0, prefix.length - 1);
    }
  }

  return prefix;
}
const strings = ["apple", "app", "application"];
const longestCommonPrefix = findLongestCommonPrefix(strings);
console.log(longestCommonPrefix); // Output: "app"
