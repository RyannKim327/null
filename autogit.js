function longestCommonPrefix(strs) {
  if (strs.length === 0) {
    return '';
  }

  let prefix = strs[0];

  for (let i = 1; i < strs.length; i++) {
    const currentString = strs[i];
    let j = 0;

    while (j < prefix.length && j < currentString.length && prefix[j] === currentString[j]) {
      j++;
    }

    if (j === 0) {
      return '';
    }

    prefix = prefix.slice(0, j);
  }

  return prefix;
}
const strings = ['flower', 'flow', 'flight'];
const commonPrefix = longestCommonPrefix(strings);
console.log(commonPrefix); // Output: "fl"
