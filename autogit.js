function findLongestCommonPrefix(strings) {
  if (strings.length === 0) {
    return '';
  }

  let prefix = strings[0];

  for (let i = 1; i < strings.length; i++) {
    const currentString = strings[i];
    let j = 0;

    while (j < prefix.length && j < currentString.length && prefix[j] === currentString[j]) {
      j++;
    }

    prefix = prefix.slice(0, j);

    if (prefix === '') {
      break;
    }
  }

  return prefix;
}
const strings = ['flower', 'flow', 'flight'];
const longestCommonPrefix = findLongestCommonPrefix(strings);
console.log(longestCommonPrefix); // Output: 'fl'
