function buildFailureFunction(pattern) {
  const failure = new Array(pattern.length).fill(0);
  let j = 0;
  let i = 1;

  while (i < pattern.length) {
    if (pattern[i] === pattern[j]) {
      failure[i] = j + 1;
      i++;
      j++;
    } else if (j > 0) {
      j = failure[j - 1];
    } else {
      failure[i] = 0;
      i++;
    }
  }

  return failure;
}
function knuthMorrisPratt(text, pattern) {
  const failure = buildFailureFunction(pattern);
  let i = 0;
  let j = 0;

  while (i < text.length) {
    if (text[i] === pattern[j]) {
      if (j === pattern.length - 1) {
        return i - j; // Match found, return the start index of the match
      }
      i++;
      j++;
    } else if (j > 0) {
      j = failure[j - 1];
    } else {
      i++;
    }
  }

  return -1; // Match not found
}
const text = "ABCDEFABCD";
const pattern = "ABCD";
const matchIndex = knuthMorrisPratt(text, pattern);
console.log(matchIndex); // Output: 0 (match found at index 0)
