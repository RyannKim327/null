function buildBadCharShift(pattern) {
  const badCharShift = {};
  const len = pattern.length;

  for (let i = 0; i < len - 1; i++) {
    badCharShift[pattern[i]] = len - 1 - i;
  }

  badCharShift.default = len;
  return badCharShift;
}

function boyerMoore(text, pattern) {
  const occurrences = [];
  const m = pattern.length;
  const n = text.length;
  const badCharShift = buildBadCharShift(pattern);
  let s = 0;

  while (s <= (n - m)) {
    let j = m - 1;
    while (j >= 0 && pattern[j] === text[s + j]) {
      j--;
    }
    if (j < 0) {
      occurrences.push(s);
      s += Math.max(1, m - badCharShift[text[s + m - 1]] || 0);
    } else {
      s += Math.max(1, j - badCharShift[text[s + j]] || 0);
    }
  }

  return occurrences;
}

// Example usage:
const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";
const pattern = "Lorem";
const result = boyerMoore(text, pattern);
console.log(result); // Output: [0]
