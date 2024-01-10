function buildPrefixTable(pattern) {
  const prefix = Array(pattern.length).fill(0);
  let length = 0;
  let i = 1;

  while (i < pattern.length) {
    if (pattern[i] === pattern[length]) {
      length++;
      prefix[i] = length;
      i++;
    } else {
      if (length !== 0) {
        length = prefix[length - 1];
      } else {
        prefix[i] = 0;
        i++;
      }
    }
  }

  return prefix;
}

function stringMatchKMP(text, pattern) {
  const prefix = buildPrefixTable(pattern);
  let i = 0;
  let j = 0;

  while (i < text.length) {
    if (pattern[j] === text[i]) {
      i++;
      j++;
    }

    if (j === pattern.length) {
      console.log("Pattern found at index ", i - j);
      j = prefix[j - 1];
    } else if (i < text.length && pattern[j] !== text[i]) {
      if (j !== 0) {
        j = prefix[j - 1];
      } else {
        i++;
      }
    }
  }
}

// Example usage:
const text = "ABCABCDABABCDABCDABDE";
const pattern = "ABCDABD";
stringMatchKMP(text, pattern);
function buildBadCharTable(pattern) {
  const badCharTable = {};

  for (let i = 0; i < pattern.length; i++) {
    badCharTable[pattern[i]] = i;
  }

  return badCharTable;
}

function buildGoodSuffixTable(pattern) {
  const suffixTable = Array(pattern.length).fill(0);
  let i = pattern.length - 1;
  let j = pattern.length;

  suffixTable[i] = j;

  while (i > 0) {
    if (pattern[i - 1] !== pattern[j - 1]) {
      if (j === pattern.length) {
        suffixTable[i - 1] = 0;
        i--;
      } else {
        suffixTable[i - 1] = j;
        i--;
        j--;
      }
    } else {
      while (i > 0 && pattern[i - 1] === pattern[j - 1]) {
        i--;
        j--;
      }

      suffixTable[i - 1] = j;
    }
  }

  return suffixTable;
}

function stringMatchBoyerMoore(text, pattern) {
  const badCharTable = buildBadCharTable(pattern);
  const suffixTable = buildGoodSuffixTable(pattern);
  let i = 0;

  while (i <= text.length - pattern.length) {
    let j = pattern.length - 1;

    while (j >= 0 && pattern[j] === text[i + j]) {
      j--;
    }

    if (j < 0) {
      console.log("Pattern found at index ", i);
      
      if (i + pattern.length < text.length) {
        const nextChar = text[i + pattern.length];
        const badCharIndex = badCharTable[nextChar] || -1;
        const shiftBy = pattern.length - suffixTable[0] - 1;

        i += Math.max(shiftBy, pattern.length - 1 - badCharIndex);
      } else {
        break;
      }
    } else {
      const badChar = text[i + j];
      const badCharIndex = badCharTable[badChar] || -1;

      const shiftBy =
        j - (suffixTable[j + 1] || 0) + Math.max(1, j - badCharIndex);

      i += shiftBy;
    }
  }
}

// Example usage:
const text = "ABCABCDABABCDABCDABDE";
const pattern = "ABCDABD";
stringMatchBoyerMoore(text, pattern);
