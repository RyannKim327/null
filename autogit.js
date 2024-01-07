function generateFailureTable(pattern) {
  const failure = Array(pattern.length).fill(0);
  let j = 0;

  for (let i = 1; i < pattern.length; i++) {
    if (pattern[i] === pattern[j]) {
      failure[i] = j + 1;
      j++;
    } else {
      if (j !== 0) {
        j = failure[j - 1];
        i--;
      } else {
        failure[i] = 0;
      }
    }
  }

  return failure;
}

function knuthMorrisPratt(text, pattern) {
  const failure = generateFailureTable(pattern);
  let i = 0;
  let j = 0;
  const matches = [];

  while (i < text.length) {
    if (text[i] === pattern[j]) {
      i++;
      j++;

      if (j === pattern.length) {
        matches.push(i - j);
        j = failure[j - 1];
      }
    } else {
      if (j !== 0) {
        j = failure[j - 1];
      } else {
        i++;
      }
    }
  }

  return matches;
}

// Usage example:
const text = "ABABDABACDABABCABAB";
const pattern = "ABABCABAB";
const matches = knuthMorrisPratt(text, pattern);
console.log(matches); // Output: [10]
