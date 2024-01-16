function longestCommonPrefix(strings) {
  let prefix = '';
  
  if (strings.length === 0) {
    return prefix;
  }
  
  for (let i = 0; i < strings[0].length; i++) {
    const char = strings[0][i];
    
    for (let j = 1; j < strings.length; j++) {
      if (strings[j][i] !== char || i >= strings[j].length) {
        return prefix;
      }
    }
    
    prefix += char;
  }
  
  return prefix;
}
const strings = ['apple', 'app', 'application', 'aptitude'];
const commonPrefix = longestCommonPrefix(strings);
console.log(commonPrefix); // Output: 'app'
