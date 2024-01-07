function computeLPSArray(pattern) {
  const lps = [0]; // LPS array initialized with the first element as zero
  let len = 0;  // Length of the previous longest prefix suffix
 
  for (let i = 1; i < pattern.length; ) {
    if (pattern[i] === pattern[len]) {
      len++;
      lps[i] = len;
      i++;
    } else {
      if (len !== 0) {
        len = lps[len - 1];
      } else {
        lps[i] = 0;
        i++;
      }
    }
  }
 
  return lps;
}
function KMPSearch(text, pattern) {
  const m = pattern.length;
  const n = text.length;
  const positions = [];

  const lps = computeLPSArray(pattern);
 
  let i = 0;  // index for text[]
  let j = 0;  // index for pattern[]
  
  while (i < n) {
    if (pattern[j] === text[i]) {
      i++;
      j++;
    }
  
    if (j === m) {
      positions.push(i - j);
      j = lps[j - 1];
    } else if (i < n && pattern[j] !== text[i]) {
      if (j !== 0) {
        j = lps[j - 1];
      } else {
        i++;
      }
    }
  }

  return positions;
}
const text = "ABABDABACDABABCABAB";
const pattern = "ABABCABAB";

const positions = KMPSearch(text, pattern);
console.log(positions); // Output: [10]
