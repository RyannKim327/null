function longestCommonPrefix(strings) {
  if (strings.length === 0) {
    return '';
  }
  
  let prefix = strings[0];
  
  for (let i = 1; i < strings.length; i++) {
    while (strings[i].indexOf(prefix) !== 0) {
      prefix = prefix.substring(0, prefix.length - 1);
      
      if (prefix === '') {
        return '';
      }
    }
  }
  
  return prefix;
}
const strings = ['apple', 'app', 'application', 'aptitude'];
const commonPrefix = longestCommonPrefix(strings);
console.log(commonPrefix); // Output: 'app'
