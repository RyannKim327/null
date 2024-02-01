function generateBadCharTable(pattern) {
  const table = new Array(256).fill(-1); // Initialize all characters as -1

  for (let i = 0; i < pattern.length - 1; i++) {
    table[pattern.charCodeAt(i)] = i;
  }

  return table;
}

function generateGoodSuffixTable(pattern) {
  const table = new Array(pattern.length).fill(0);

  let j = 0;
  let k = 1;
  while (k < pattern.length) {
    if (pattern[j] === pattern[k]) {
      table[k] = j + 1;
      j++;
      k++;
    } else {
      if (j === 0) {
        table[k] = 0;
        k++;
      } else {
        j = table[j - 1];
      }
    }
  }

  return table;
}
function boyerMooreSearch(text, pattern) {
  const m = pattern.length;
  const n = text.length;

  const badCharTable = generateBadCharTable(pattern);
  const goodSuffixTable = generateGoodSuffixTable(pattern);

  let i = 0;
  while (i <= n - m) {
    let j = m - 1;

    while (j >= 0 && pattern[j] === text[i + j]) {
      j--;
    }

    if (j === -1) {
      // Pattern found at index i
      return i;
    } else {
      const badCharSkip = j - badCharTable[text.charCodeAt(i + j)];
      const goodSuffixSkip = goodSuffixTable[j];

      i += Math.max(badCharSkip, goodSuffixSkip);
    }
  }

  // Pattern not found
  return -1;
}
const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";
const pattern = "dolor";

const index = boyerMooreSearch(text, pattern);

if (index !== -1) {
  console.log(`Pattern found at index ${index}.`);
} else {
  console.log(`Pattern not found.`);
}
