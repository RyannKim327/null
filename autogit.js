function longestCommonPrefix(strs) {
  let prefix = '';

  if (strs.length === 0) {
    return prefix;
  }

  strs.sort();

  const first = strs[0];
  const last = strs[strs.length - 1];

  for (let i = 0; i < first.length; i++) {
    if (first[i] === last[i]) {
      prefix += first[i];
    } else {
      break;
    }
  }

  return prefix;
}
const strings = ['flower', 'flow', 'flight'];
console.log(longestCommonPrefix(strings));
"fl"
