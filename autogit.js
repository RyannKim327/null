function computeLPSArray(pattern) {
  const lps = [0]; // initialize the LPS array with the first element as 0
  let len = 0; // length of the previous longest prefix suffix
  
  let i = 1;
  while (i < pattern.length) {
    if (pattern[i] === pattern[len]) {
      len++;
      lps[i] = len;
      i++;
    } else {
      if (len !== 0) {
        len = lps[len - 1]; // backtrack to the previous LPS value
      } else {
        lps[i] = 0;
        i++;
      }
    }
  }
  
  return lps;
}
function search(text, pattern) {
  const lps = computeLPSArray(pattern);
  
  let i = 0; // index for text
  let j = 0; // index for pattern
  
  const indices = []; // to store the indices where the pattern is found
  
  while (i < text.length) {
    if (pattern[j] === text[i]) {
      i++;
      j++;
    }
    
    if (j === pattern.length) {
      indices.push(i - j); // pattern found at index i-j
      j = lps[j - 1]; // backtrack to the previous LPS value
    } else if (i < text.length && pattern[j] !== text[i]) {
      if (j !== 0) {
        j = lps[j - 1]; // backtrack to the previous LPS value
      } else {
        i++;
      }
    }
  }
  
  return indices;
}
const text = "ABABCABABDABABCABAB";
const pattern = "ABABCABAB";

const indices = search(text, pattern);
console.log(`Pattern found at indices: ${indices.join(", ")}`);
