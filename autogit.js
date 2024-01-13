function buildBadCharTable(pattern) {
  const badCharTable = {};
  const patternLen = pattern.length;

  for (let i = 0; i < patternLen; i++) {
    const char = pattern[i];
    const lastIndex = pattern.lastIndexOf(char);

    if (lastIndex === i) {
      badCharTable[char] = patternLen - i - 1;
    } else {
      badCharTable[char] = patternLen - lastIndex - 1;
    }
  }

  return badCharTable;
}

function boyerMooreSearch(pattern, text) {
  const patternLen = pattern.length;
  const textLen = text.length;
  const badCharTable = buildBadCharTable(pattern);
  const occurrences = [];
  let skip = 0;

  for (let i = 0; i <= textLen - patternLen; i += skip) {
    let j = patternLen - 1;

    while (j >= 0 && text[i + j] === pattern[j]) {
      j--;
    }

    if (j === -1) {
      occurrences.push(i);
      skip = badCharTable[text[i + patternLen]] || 1;
    } else {
      skip = Math.max(1, j - badCharTable[text[i + j]]);
    }
  }

  return occurrences;
}

// Example usage:
const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";
const pattern = "ipsum";

const occurrences = boyerMooreSearch(pattern, text);

console.log("Pattern occurrences:", occurrences);
