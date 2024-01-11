function computeLPSArray(pattern, lps) {
  let len = 0;
  let i = 1;
  lps[0] = 0;

  while (i < pattern.length) {
    if (pattern[i] === pattern[len]) {
      len++;
      lps[i] = len;
      i++;
    } else {
      if (len !== 0) {
        len = lps[len - 1];
      } else {
        lps[i] = 0;
        i++;
      }
    }
  }
}

function KMPSearch(text, pattern) {
  const M = pattern.length;
  const N = text.length;

  const lps = new Array(M).fill(0);
  computeLPSArray(pattern, lps);

  let i = 0;
  let j = 0;
  const matches = [];

  while (i < N) {
    if (pattern[j] === text[i]) {
      i++;
      j++;
    }

    if (j === M) {
      matches.push(i - j);
      j = lps[j - 1];
    } else if (i < N && pattern[j] !== text[i]) {
      if (j !== 0) {
        j = lps[j - 1];
      } else {
        i++;
      }
    }
  }

  return matches;
}

// Example usage:
const text = "ABABDABACDABABCABAB";
const pattern = "ABABCABAB";

const matches = KMPSearch(text, pattern);
console.log(matches); // Output: [10]
function buildBadCharShiftMap(pattern) {
  const map = new Map();

  for (let i = 0; i < pattern.length - 1; i++) {
    map.set(pattern[i], pattern.length - 1 - i);
  }

  return map;
}

function buildSuffixes(pattern) {
  const m = pattern.length;
  const suffixes = new Array(m).fill(0);

  let f = 0;
  let g = m - 1;
  suffixes[m - 1] = m;

  for (let i = m - 2; i >= 0; i--) {
    if (i > g && suffixes[i + m - 1 - f] < i - g) {
      suffixes[i] = suffixes[i + m - 1 - f];
    } else {
      if (i < g) g = i;
      f = i;
      while (g >= 0 && pattern[g] === pattern[g + m - 1 - f]) {
        g--;
      }
      suffixes[i] = f - g;
    }
  }

  return suffixes;
}

function BoyerMoore(text, pattern) {
  const n = text.length;
  const m = pattern.length;

  if (m === 0 || n < m) {
    return [];
  }

  const matches = [];
  const badCharShiftMap = buildBadCharShiftMap(pattern);
  const suffixes = buildSuffixes(pattern);

  let i = 0;
  while (i <= n - m) {
    let j = m - 1;
    while (j >= 0 && pattern[j] === text[i + j]) {
      j--;
    }

    if (j < 0) {
      matches.push(i);
      i += suffixes[0];
    } else {
      const badShift = badCharShiftMap.get(text[i + j]) || m;
      const goodShift = suffixes[j];

      i += Math.max(badShift, goodShift);
    }
  }

  return matches;
}

// Example usage:
const text = "ABABDABACDABABCABAB";
const pattern = "ABABCABAB";

const matches = BoyerMoore(text, pattern);
console.log(matches); // Output: [10]
