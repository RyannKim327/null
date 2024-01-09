function prefixTable(pattern) {
  const table = [0];
  let prefixLen = 0;
  let i = 1;
  
  while (i < pattern.length) {
    if (pattern[i] === pattern[prefixLen]) {
      prefixLen++;
      table[i] = prefixLen;
      i++;
    } else {
      if (prefixLen !== 0) {
        prefixLen = table[prefixLen - 1];
      } else {
        table[i] = 0;
        i++;
      }
    }
  }
  
  return table;
}
function KMPSearch(pattern, text) {
  const result = [];
  const M = pattern.length;
  const N = text.length;
  const table = prefixTable(pattern);
  
  let i = 0;
  let j = 0;
  
  while (i < N) {
    if (pattern[j] === text[i]) {
      i++;
      j++;
    }
    
    if (j === M) {
      result.push(i - j);
      j = table[j - 1];
    } else if (i < N && pattern[j] !== text[i]) {
      if (j !== 0) {
        j = table[j - 1];
      } else {
        i++;
      }
    }
  }
  
  return result;
}
const text = "ABABDABACDABABCABAB";
const pattern = "ABABCABAB";

const indices = KMPSearch(pattern, text);
console.log(indices); // Output: [10]
