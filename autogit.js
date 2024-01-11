function preprocessPattern(pattern) {
  const badChar = {};
  const goodSuffix = {};
  const m = pattern.length;

  for (let i = 0; i < m; i++) {
    const char = pattern[i];
    badChar[char] = i;
    goodSuffix[i] = 0;
  }

  for (let i = m - 2; i >= 0; i--) {
    const shift = m - i - 1;
    const suffix = pattern.substring(i + 1);

    for (let j = i; j >= 0; j--) {
      const prefix = pattern.substring(j, i + 1);
      if (suffix === prefix) {
        goodSuffix[i] = shift;
        break;
      }
    }
  }

  return { badChar, goodSuffix };
}

function boyerMoore(pattern, text) {
  const { badChar, goodSuffix } = preprocessPattern(pattern);
  const m = pattern.length;
  const n = text.length;

  let i = 0;
  while (i <= n - m) {
    let j = m - 1;
    while (j >= 0 && text[i + j] === pattern[j]) {
      j--;
    }

    if (j < 0) {
      return i;
    }

    const x = j - badChar[text[i + j]];
    const y = goodSuffix[j];
    i += Math.max(x, y);
  }

  return -1;
}
