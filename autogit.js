function buildFailureTable(pattern) {
  const table = Array(pattern.length).fill(0);
  let i = 0;
  
  for (let j = 1; j < pattern.length;) {
    if (pattern[i] === pattern[j]) {
      table[j] = i + 1;
      i++;
      j++;
    } else {
      if (i !== 0) {
        i = table[i - 1];
      } else {
        table[j] = 0;
        j++;
      }
    }
  }
  
  return table;
}

function stringMatch(text, pattern) {
  const failureTable = buildFailureTable(pattern);
  let j = 0;

  for (let i = 0; i < text.length;) {
    if (pattern[j] === text[i]) {
      i++;
      j++;
      
      if (j === pattern.length) {
        return i - j; // Match found, return the starting index
      }
    } else {
      if (j !== 0) {
        j = failureTable[j - 1];
      } else {
       i++;
      }
    }
  }

  return -1; // Match not found
}

// Example usage:
const text = "ABCABCDABABCDABCDABDE";
const pattern = "ABCDABD";

const matchIndex = stringMatch(text, pattern);
if (matchIndex !== -1) {
  console.log(`Pattern found at index ${matchIndex}`);
} else {
  console.log("Pattern not found");
}
