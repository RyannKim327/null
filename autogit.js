function longestCommonPrefix(strings) {
  let prefix = '';

  if (strings.length === 0) {
    return prefix;
  }

  const firstString = strings[0];

  for (let i = 0; i < firstString.length; i++) {
    const char = firstString[i];

    for (let j = 1; j < strings.length; j++) {
      if (i >= strings[j].length || strings[j][i] !== char) {
        return prefix;
      }
    }

    prefix += char;
  }

  return prefix;
}
const strings = ['apple', 'app', 'appearance'];
console.log(longestCommonPrefix(strings)); // Output: "app"
