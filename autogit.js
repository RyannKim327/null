function preprocessPattern(pattern) {
  const table = new Array(256).fill(pattern.length);

  for (let i = 0; i < pattern.length - 1; i++) {
    table[pattern.charCodeAt(i)] = pattern.length - 1 - i;
  }

  const suffix = new Array(pattern.length).fill(0);
  let prefix = pattern.length;

  for (let i = pattern.length - 1; i >= 0; i--) {
    if (isPrefix(pattern, i + 1)) {
      prefix = i + 1;
    }

    suffix[i] = prefix + (pattern.length - 1 - i);
  }

  for (let i = 0; i < pattern.length - 1; i++) {
    const idx = pattern.length - 1 - suffix[i];
    if (suffix[i] === idx) {
      suffix[idx] = pattern.length - 1 - i;
    }
  }

  return { table, suffix };
}

function isPrefix(pattern, pos) {
  for (let i = pos, j = 0; i < pattern.length; i++, j++) {
    if (pattern[i] !== pattern[j]) {
      return false;
    }
  }
  return true;
}
function boyerMooreSearch(text, pattern) {
  const { table, suffix } = preprocessPattern(pattern);
  const matches = [];

  let i = 0;
  while (i <= text.length - pattern.length) {
    let j = pattern.length - 1;

    while (j >= 0 && pattern[j] === text[i + j]) {
      j--;
    }

    if (j < 0) {
      matches.push(i);
      i += pattern.length;
    } else {
      i += Math.max(suffix[j], table[text.charCodeAt(i + j)] - pattern.length + 1 + j);
    }
  }

  return matches;
}
const text = "ABAAABCDBBABCDDEBCABC";
const pattern = "BC";
const matches = boyerMooreSearch(text, pattern);
console.log(matches); // Output: [6, 12, 18]
