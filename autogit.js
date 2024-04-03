function boyerMooreSearch(text, pattern) {
  const badChar = {};
  const goodSuffix = {};

  function preprocessPattern(pattern) {
    const m = pattern.length;

    for (let i = 0; i < m; i++) {
      badChar[pattern[i]] = i;
    }

    for (let i = 0; i <= m; i++) {
      let [suffix, prefix] = computeSuffixPrefix(pattern.slice(i));
      goodSuffix[i] = { suffix, prefix };
    }
  }

  function computeSuffixPrefix(str) {
    const m = str.length;
    const suffix = new Array(m).fill(0);
    const prefix = new Array(m).fill(false);

    for (let i = 0; i < m; i++) {
      let j = i, k = 0;

      while (j >= 0 && str[j] === str[m - 1 - k]) {
        j--;
        k++;
        suffix[k] = j + 1;
      }

      if (j === -1) prefix[k] = true;
    }

    return [suffix, prefix];
  }

  function search(text, pattern) {
    const n = text.length;
    const m = pattern.length;

    let i = 0;
    while (i <= n - m) {
      let j = m - 1;

      while (j >= 0 && pattern[j] === text[i + j]) {
        j--;
      }

      if (j < 0) {
        console.log(`Pattern found at index ${i}`);
        i += goodSuffix[0].suffix;
      } else {
        const badCharShift = Math.max(1, j - badChar[text[i + j]]);
        const goodSuffixShift = goodSuffix[j + 1].suffix;

        i += Math.max(badCharShift, goodSuffixShift);
      }
    }
  }

  preprocessPattern(pattern);
  search(text, pattern);
}

// Example usage
const text = "ABAAABCD";
const pattern = "ABC";
boyerMooreSearch(text, pattern);
