function buildLPS(pattern) {
  const lps = [0]; // lps[i] stores the length of the longest proper prefix which is also suffix of pattern[0..i]
  let len = 0; // length of the previous longest prefix suffix
  
  for (let i = 1; i < pattern.length; i++) {
    if (pattern[i] === pattern[len]) {
      len++;
      lps[i] = len;
    } else {
      if (len !== 0) {
        len = lps[len - 1];
        i--; // Check pattern[i] again in the next iteration
      } else {
        lps[i] = 0;
      }
    }
  }

  return lps;
}

function knuthMorrisPratt(text, pattern) {
  const n = text.length;
  const m = pattern.length;
  const lps = buildLPS(pattern);
  const indexes = [];

  let i = 0; // index for text
  let j = 0; // index for pattern
  
  while (i < n) {
    if (pattern[j] === text[i]) { // Match found, move both pointers
      i++;
      j++;
      
      if (j === m) { // Entire pattern is matched
        indexes.push(i - j);
        j = lps[j - 1];
      }
    } else if (j !== 0) {
      j = lps[j - 1]; // Mismatch, shift pattern to the right
    } else {
      i++; // No match, move only the text pointer
    }
  }

  return indexes;
}

// Usage
const text = "ABABDABACDABABCABAB";
const pattern = "ABABCABAB";

const indexes = knuthMorrisPratt(text, pattern);
console.log("Pattern found at indexes:", indexes);
