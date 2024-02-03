function findLongestCommonPrefix(strings) {
  let prefix = '';

  if (strings.length === 0 || strings.length === 1) {
    return prefix;
  }

  for (let i = 0; i < strings[0].length; i++) {
    const char = strings[0][i];

    for (let j = 1; j < strings.length; j++) {
      if (i >= strings[j].length || strings[j][i] !== char) {
        return prefix;
      }
    }

    prefix += char;
  }

  return prefix;
}
const strings = ['apple', 'app', 'append', 'apricot'];
const longestPrefix = findLongestCommonPrefix(strings);
console.log(longestPrefix);  // Output: 'ap'
