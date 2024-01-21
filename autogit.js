function longestCommonPrefix(strs) {
  let prefix = '';

  if (strs.length === 0) {
    return prefix;
  }

  for (let i = 0; i < strs[0].length; i++) {
    const char = strs[0][i];

    for (let j = 1; j < strs.length; j++) {
      if (strs[j][i] !== char || i >= strs[j].length) {
        return prefix;
      }
    }

    prefix += char;
  }

  return prefix;
}
const strings = ['flower', 'flow', 'flight'];
const prefix = longestCommonPrefix(strings);

console.log(prefix); // Outputs: "fl"
