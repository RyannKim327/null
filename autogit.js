function longestCommonPrefix(strings) {
  if (strings.length === 0) {
    return '';
  }

  let prefix = '';

  for (let i = 0; i < strings[0].length; i++) {
    const char = strings[0][i];

    for (let j = 1; j < strings.length; j++) {
      if (strings[j][i] !== char) {
        return prefix;
      }
    }

    prefix += char;
  }

  return prefix;
}
const strings = ['apple', 'ape', 'april'];
const commonPrefix = longestCommonPrefix(strings);

console.log(commonPrefix); // Output: 'ap'
