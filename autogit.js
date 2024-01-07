function longestCommonPrefix(strings) {
  if (strings.length === 0) {
    return ''; // No strings in the set
  }

  let prefix = strings[0]; // Assume the first string as the initial prefix

  for (let i = 1; i < strings.length; i++) {
    while (strings[i].indexOf(prefix) !== 0) {
      prefix = prefix.substring(0, prefix.length - 1);
      if (prefix === '') {
        return ''; // No common prefix found
      }
    }
  }

  return prefix;
}

// Example usage
const strings = ['flower', 'flow', 'flight'];
const commonPrefix = longestCommonPrefix(strings);
console.log(commonPrefix); // Output: 'fl'
