function buildPrefixTable(pattern) {
  const prefixTable = [0];
  let prefixIndex = 0;

  for (let i = 1; i < pattern.length; i++) {
    if (pattern[i] === pattern[prefixIndex]) {
      prefixIndex++;
      prefixTable[i] = prefixIndex;
    } else {
      if (prefixIndex > 0) {
        prefixIndex = prefixTable[prefixIndex - 1];
        i--; // Retry the current character against the new prefix index
      } else {
        prefixTable[i] = 0;
      }
    }
  }

  return prefixTable;
}

function stringMatch(text, pattern) {
  const prefixTable = buildPrefixTable(pattern);
  const matches = [];
  let j = 0; // index for pattern
  let i = 0; // index for text

  while (i < text.length) {
    if (text[i] === pattern[j]) {
      i++; // Increment both indices
      j++;

      if (j === pattern.length) {
        matches.push(i - j); // Found a match, add its start index to matches
        j = prefixTable[j - 1]; // Check for more matches by using the prefix table
      }
    } else if (j > 0) {
      j = prefixTable[j - 1];
    } else {
      i++;
    }
  }

  return matches;
}

// Example usage:
const text = "ABABDABACDABABCABAB";
const pattern = "ABABCABAB";

const matches = stringMatch(text, pattern);
console.log("Matches:", matches); // Output: [10]
