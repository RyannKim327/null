function longestCommonPrefix(strings) {
  let prefix = '';

  if (strings.length === 0) {
    return prefix;
  }

  strings.sort();

  for (let i = 0; i < strings[0].length; i++) {
    if (strings[0][i] === strings[strings.length - 1][i]) {
      prefix += strings[0][i];
    } else {
      break;
    }
  }

  return prefix;
}
const strings = ['flower', 'flow', 'flight'];
console.log(longestCommonPrefix(strings));   // Output: 'fl'
