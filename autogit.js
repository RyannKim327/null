function longestCommonPrefix(strings) {
  if (strings.length === 0) {
    return '';
  }

  const firstString = strings[0];
  let prefix = '';

  for (let i = 0; i < firstString.length; i++) {
    const currentChar = firstString[i];

    for (let j = 1; j < strings.length; j++) {
      if (i >= strings[j].length || strings[j][i] !== currentChar) {
        return prefix;
      }
    }

    prefix += currentChar;
  }

  return prefix;
}
const strings = ['flower', 'flow', 'flight'];
const commonPrefix = longestCommonPrefix(strings);
console.log(commonPrefix); // Output: "fl"
