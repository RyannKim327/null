function findCommonPrefix(str1, str2) {
  let i = 0;
  while (i < str1.length && i < str2.length && str1[i] === str2[i]) {
    i++;
  }
  return str1.slice(0, i);
}
function longestCommonPrefix(strs) {
  if (strs.length === 0) {
    return ''; // No strings to compare
  }
  
  let prefix = strs[0]; // Assume first string as initial prefix
  
  // Iterate over all strings starting from the second one
  for (let i = 1; i < strs.length; i++) {
    prefix = findCommonPrefix(prefix, strs[i]);
    if (prefix === '') {
      return ''; // No common prefix found
    }
  }
  
  return prefix;
}
const strings = ['flower', 'flow', 'flight', 'flock'];
const commonPrefix = longestCommonPrefix(strings);
console.log(commonPrefix); // Output: 'fl'
