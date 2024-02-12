function longestCommonPrefix(strings) {
  const n = strings.length;
  if (n === 0) return '';

  for (let i = 0; i < strings[0].length; i++) {
    const char = strings[0][i];
    for (let j = 1; j < n; j++) {
      if (i >= strings[j].length || strings[j][i] !== char) {
        return strings[0].substring(0, i);
      }
    }
  }

  return strings[0];
}

// Example usage:
const strings = ['flower', 'flow', 'flight'];
const commonPrefix = longestCommonPrefix(strings);
console.log(commonPrefix); // Output: 'fl'
