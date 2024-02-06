function longestCommonPrefix(strings) {
  let prefix = '';

  if (strings.length === 0) {
    return prefix;
  }

  if (strings.length === 1) {
    return strings[0];
  }

  strings.sort();

  for (let i = 0; i < strings[0].length; i++) {
    if (strings[0][i] === strings[strings.length - 1][i]) {
      prefix += strings[0][i];
    } else {
      return prefix;
    }
  }

  return prefix;
}
const strings = ['flower', 'flow', 'flight'];
console.log(longestCommonPrefix(strings));  // Output: fl

const strings2 = ['dog', 'racecar', 'car'];
console.log(longestCommonPrefix(strings2));  // Output: ''
