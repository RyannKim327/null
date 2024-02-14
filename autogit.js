function longestCommonPrefix(strings) {
  if (strings.length === 0) {
    return '';
  }
  
  let prefix = strings[0];
  
  for (let i = 1; i < strings.length; i++) {
    while (strings[i].indexOf(prefix) !== 0) {
      prefix = prefix.slice(0, -1);
    }
  }
  
  return prefix;
}
const strings = ['apple', 'app', 'application'];
const commonPrefix = longestCommonPrefix(strings);
console.log(commonPrefix); // Output: 'app'
