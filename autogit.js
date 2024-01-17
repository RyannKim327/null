function preprocessPattern(pattern) {
  const m = pattern.length;
  
  // Bad character table
  const badChar = new Array(256).fill(-1);
  for (let i = 0; i < m; i++) {
    badChar[pattern.charCodeAt(i)] = i;
  }
  
  // Good suffix table
  const suffix = Array(m + 1).fill(0); // stores the length of the longest suffix
  const shift = new Array(m + 1).fill(m); // stores the shift value for each shift case
  let j = m;

  for (let i = m - 1; i >= 0; i--) {
    if (suffix[i + 1] !== j - i - 1) {
      continue;
    }

    while (j < m - i && pattern.charAt(j - 1) !== pattern.charAt(m - i - 1)) {
      if (shift[j] === m) {
        shift[j] = m - i - 1;
      }
      j = shift[j];
    }

    j -= 1;
    suffix[i] = m - j;

    if (shift[j] === m) {
      shift[j] = m - i - 1;
    }
  }

  for (let i = 0; i < m; i++) {
    shift[i] = Math.min(shift[i], m - suffix[0]);
  }

  return { badChar, shift };
}
function boyerMooreSearch(text, pattern) {
  const n = text.length;
  const m = pattern.length;

  if (m === 0) {
    return [];
  }

  const result = [];
  const { badChar, shift } = preprocessPattern(pattern);

  let s = 0; // text pointer
  while (s <= n - m) {
    let j = m - 1;
    while (j >= 0 && pattern.charAt(j) === text.charAt(s + j)) {
      j--;
    }

    if (j < 0) {
      result.push(s); // pattern found at index s
      s += shift[0];
    } else {
      s += Math.max(shift[j + 1], j - badChar[text.charCodeAt(s + j)]);
    }
  }

  return result;
}
const text = "ABAAABCD";
const pattern = "ABC";
const matches = boyerMooreSearch(text, pattern);
console.log(matches); // Output: [5]
