function longestCommonPrefix(strs) {
  if (strs.length === 0) {
    return '';
  }
  
  let prefix = '';
  const firstStr = strs[0];

  for (let i = 0; i < firstStr.length; i++) {
    const char = firstStr[i];
    
    for (let j = 1; j < strs.length; j++) {
      if (strs[j][i] !== char) {
        return prefix;
      }
    }
    
    prefix += char;
  }
  
  return prefix;
}

const strings = ['flower', 'flow', 'flight'];
console.log(longestCommonPrefix(strings)); // Output: 'fl'
