function buildFailureArray(pattern) {
  const failure = Array(pattern.length).fill(0);

  let i = 1, j = 0;
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
function KMP(text, pattern) {
  const failure = buildFailureArray(pattern);

  let i = 0, j = 0;
  while (i < text.length) {
    if (text[i] === pattern[j]) {
      if (j === pattern.length - 1) {
        return i - j; // match found, return the starting position
      }
      i++;
      j++;
    } else if (j > 0) {
      j = failure[j - 1];
    } else {
      i++;
    }
  }

  return -1; // match not found
}
const text = "ABCABDABABCABCDABDE";
const pattern = "ABCABCD";

const position = KMP(text, pattern);
console.log(position); // Output: 10

if (position !== -1) {
  console.log("Pattern found at position", position);
} else {
  console.log("Pattern not found");
}
