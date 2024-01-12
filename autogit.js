function findCommonPrefix(strings) {
  // Base case: If the array is empty, return an empty string
  if (strings.length === 0) {
    return '';
  }

  // Start with the first string as the common prefix
  let prefix = strings[0];

  // Iterate through the array, starting from the second string
  for (let i = 1; i < strings.length; i++) {
    // While the current string does not start with the prefix, remove the last character of the prefix
    while (strings[i].indexOf(prefix) !== 0) {
      prefix = prefix.slice(0, prefix.length - 1);
    }

    // If the prefix becomes empty, there are no common characters among the strings
    if (prefix === '') {
      return '';
    }
  }

  return prefix;
}
const strings = ['apple', 'app', 'approve'];

const longestCommonPrefix = findCommonPrefix(strings);
console.log(longestCommonPrefix);  // Output: "app"
