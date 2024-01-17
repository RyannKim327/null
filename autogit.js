// Construct the prefix table (also known as the failure function)
function buildPrefixTable(pattern) {
  const prefixTable = [0];
  let prefixIdx = 0;

  for (let i = 1; i < pattern.length; i++) {
    if (pattern[i] === pattern[prefixIdx]) {
      prefixIdx++;
    } else {
      prefixIdx = prefixTable[prefixIdx - 1] || 0;
      while (prefixIdx && pattern[i] !== pattern[prefixIdx]) {
        prefixIdx = prefixTable[prefixIdx - 1] || 0;
      }
    }

    prefixTable.push(prefixIdx);
  }

  return prefixTable;
}

// Perform string matching using the KMP algorithm
function stringMatch(text, pattern) {
  const prefixTable = buildPrefixTable(pattern);
  const matches = [];

  let textIdx = 0;
  let patternIdx = 0;

  while (textIdx < text.length && patternIdx < pattern.length) {
    if (text[textIdx] === pattern[patternIdx]) {
      textIdx++;
      patternIdx++;
    } else if (patternIdx !== 0) {
      patternIdx = prefixTable[patternIdx - 1];
    } else {
      textIdx++;
    }

    if (patternIdx === pattern.length) {
      matches.push(textIdx - patternIdx);
      patternIdx = 0;
    }
  }

  return matches;
}

// Example usage
const text = "ABABDABACDABABCABAB";
const pattern = "ABABCABAB";
const matches = stringMatch(text, pattern);
console.log(matches); // output: [10]
