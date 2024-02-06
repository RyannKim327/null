function findLongestCommonPrefix(strings) {
  if (strings.length === 0) {
    return '';
  } else if (strings.length === 1) {
    return strings[0];
  }

  let prefix = '';
  const firstString = strings[0];

  for (let i = 0; i < firstString.length; i++) {
    const char = firstString[i];

    for (let j = 1; j < strings.length; j++) {
      if (strings[j][i] !== char || i >= strings[j].length) {
        return prefix;
      }
    }

    prefix += char;
  }

  return prefix;
}
const strings = ['apple', 'app', 'application'];
const longestCommonPrefix = findLongestCommonPrefix(strings);
console.log(longestCommonPrefix); // Output: 'app'
