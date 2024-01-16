function longestCommonPrefix(strings) {
  if (strings.length === 0) {
    return '';
  }
  
  let prefix = '';
  
  for (let i = 0; i < strings[0].length; i++) {
    const char = strings[0][i];
    
    for (let j = 1; j < strings.length; j++) {
      if (strings[j][i] !== char) {
        return prefix;  // Found a mismatch, return the current prefix
      }
    }
    
    prefix += char;  // All characters matched, append to the prefix
  }
  
  return prefix;
}
const strings = ['flower', 'flow', 'flight'];
const result = longestCommonPrefix(strings);
console.log(result);  // Output: 'fl'
