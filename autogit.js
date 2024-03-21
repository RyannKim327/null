function badCharHeuristic(pattern) {
  const badChar = {};
  const len = pattern.length;
  
  for (let i = 0; i < len - 1; i++) {
    badChar[pattern[i]] = len - i - 1;
  }

  return badChar;
}

function searchBoyerMooreHorspool(text, pattern) {
  const n = text.length;
  const m = pattern.length;
  const badChar = badCharHeuristic(pattern);

  let s = 0;
  while (s <= n - m) {
    let j = m - 1;

    while (j >= 0 && pattern[j] === text[s + j]) {
      j--;
    }

    if (j < 0) {
      console.log(`Pattern found at index ${s}`);
      s += (s + m < n) ? m - badChar[text[s + m]] : 1;
    } else {
      s += Math.max(1, badChar[text[s + j]] - m + 1 + j);
    }
  }
}

const text = "ababcababcababc";
const pattern = "ab";

searchBoyerMooreHorspool(text, pattern);
