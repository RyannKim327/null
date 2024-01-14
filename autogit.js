function longestCommonPrefix(strs) {
  let lcp = '';
  
  if (strs.length === 0) {
    return lcp;
  }
  
  for (let i = 0; i < strs[0].length; i++) {
    const char = strs[0][i];
    
    for (let j = 1; j < strs.length; j++) {
      if (strs[j][i] !== char) {
        return lcp;
      }
    }
    
    lcp += char;
  }
  
  return lcp;
}
const strings = ['flower', 'flow', 'flight'];
console.log(longestCommonPrefix(strings));  // Output: "fl"
