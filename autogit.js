function longestCommonPrefix(strs) {
  if (strs.length === 0) return '';

  let prefix = strs[0];

  for (let i = 1; i < strs.length; i++) {
    const currentStr = strs[i];

    let j = 0;
    while (j < prefix.length && j < currentStr.length && prefix[j] === currentStr[j]) {
      j++;
    }

    prefix = prefix.substring(0, j);

    if (prefix === '') return '';
  }

  return prefix;
}
const strings1 = ['flower', 'flow', 'flight'];
console.log(longestCommonPrefix(strings1)); // Output: 'fl'

const strings2 = ['dog', 'racecar', 'car'];
console.log(longestCommonPrefix(strings2)); // Output: ''
