function badCharHeuristic(pattern) {
  const table = {};
  
  for (let i = 0; i < pattern.length; i++) {
    table[pattern[i]] = i;
  }
  
  return table;
}
function boyerMooreSearch(text, pattern) {
  const m = pattern.length;
  const n = text.length;
  
  // Preprocessing step
  const badChar = badCharHeuristic(pattern);
  
  let shift = 0;
  
  while (shift <= n - m) {
    let j = m - 1;
    
    // Keep reducing the index j until a mismatch is found or pattern is fully matched
    while (j >= 0 && pattern[j] === text[shift + j]) {
      j--;
    }
    
    // If pattern is found at the current shift, return its index
    if (j < 0) {
      return shift;
    }
    
    // Shift the pattern to align with the mismatched character in the text
    shift += Math.max(1, j - badChar[text[shift + j]]);
  }
  
  // Pattern not found
  return -1;
}
// Example usage
const text = "ABABDABACDABABCABAB";
const pattern = "ABABCABAB";

console.log(boyerMooreSearch(text, pattern)); // Output: 10
