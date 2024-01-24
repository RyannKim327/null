function constructPiTable(pattern) {
  const pi = Array(pattern.length).fill(0);
  let i = 1, j = 0;
  
  while (i < pattern.length) {
    if (pattern[i] === pattern[j]) {
      pi[i] = j + 1;
      i++;
      j++;
    } else if (j > 0) {
      j = pi[j - 1];
    } else {
      pi[i] = 0;
      i++;
    }
  }

  return pi;
}
function stringMatch(text, pattern) {
  const pi = constructPiTable(pattern);
  const matches = [];

  let i = 0, j = 0;
  while (i < text.length) {
    if (text[i] === pattern[j]) {
      if (j === pattern.length - 1) {
        matches.push(i - j);
        j = pi[j];
      } else {
        i++;
        j++;
      }
    } else if (j > 0) {
      j = pi[j - 1];
    } else {
      i++;
    }
  }

  return matches;
}
const text = "ABABCABABABA";
const pattern = "ABA";
const matches = stringMatch(text, pattern);
console.log(matches);  // Output: [2, 7, 9, 10]
