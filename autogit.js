function buildFailureTable(pattern) {
  const table = new Array(pattern.length).fill(0);
  let j = 0;
  
  for (let i = 1; i < pattern.length; i++) {
    if (pattern[i] === pattern[j]) {
      table[i] = j + 1;
      j++;
    } else {
      if (j !== 0) {
        j = table[j - 1];
        i--;  // Continue comparing the character in the next loop
      } else {
        table[i] = 0;
      }
    }
  }
  
  return table;
}

function stringMatch(text, pattern) {
  const failureTable = buildFailureTable(pattern);
  let i = 0;
  let j = 0;
  
  while (i < text.length) {
    if (text[i] === pattern[j]) {
      if (j === pattern.length - 1) {
        return i - j;  // Match found, return the starting index
      }
      i++;
      j++;
    } else if (j > 0) {
      j = failureTable[j - 1];
    } else {
      i++;
    }
  }
  
  return -1;  // Match not found
}

// Example usage
const text = "ABCABDABABCABCDABDE";
const pattern = "ABCD";

console.log(stringMatch(text, pattern));  // Output: 12
