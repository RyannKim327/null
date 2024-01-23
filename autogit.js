function longestCommonPrefix(strings) {
  if (strings.length === 0) {
    return '';
  }
  
  if (strings.length === 1) {
    return strings[0];
  }
  
  strings.sort();
  
  let prefix = '';
  
  for (let i = 0; i < strings[0].length; i++) {
    for (let j = 1; j < strings.length; j++) {
      if (strings[j][i] !== strings[0][i]) {
        return prefix;
      }
    }
    
    prefix += strings[0][i];
  }
  
  return prefix;
}

// Example usage
const strings = ['flower', 'flow', 'flight'];
const commonPrefix = longestCommonPrefix(strings);
console.log(commonPrefix); // Output: "fl"
