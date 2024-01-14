function generateLPS(pattern) {
  const lps = [0];
  let len = 0;
  let i = 1;

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

  return lps;
}

function KMPSearch(text, pattern) {
  const lps = generateLPS(pattern);
  const matches = [];
  let i = 0;
  let j = 0;

  while (i < text.length) {
    if (text[i] === pattern[j]) {
      i++;
      j++;
    }

    if (j === pattern.length) {
      matches.push(i - j);
      j = lps[j - 1];
    }
    else if (i < text.length && pattern[j] !== text[i]) {
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
const text = "ABCABABABA";
const pattern = "ABA";
const matches = KMPSearch(text, pattern);
console.log(matches); // Output: [3, 5, 7]
function generateBadCharShift(pattern) {
  const badCharShift = {};
  const patternLength = pattern.length;

  for (let i = 0; i < patternLength; i++) {
    badCharShift[pattern[i]] = patternLength - i - 1;
  }

  return badCharShift;
}

function generateSuffixes(pattern) {
  const suff = [];
  const patternLength = pattern.length;
  let lastPrefixPosition = patternLength;

  for (let i = patternLength - 1; i >= 0; i--) {
    if (isPrefix(pattern, i + 1)) {
      lastPrefixPosition = i + 1;
    }
    suff[patternLength - 1 - i] = lastPrefixPosition - i + patternLength - 1;
  }

  for (let i = 0; i < patternLength - 1; i++) {
    const suffixLength = suffixLengthValue(pattern, i);
    suff[suffixLength] = patternLength - 1 - i + suffixLength;
  }

  return suff;
}

function isPrefix(pattern, p) {
  for (let i = p, j = 0; i < pattern.length; i++, j++) {
    if (pattern[i] !== pattern[j]) {
      return false;
    }
  }

  return true;
}

function suffixLengthValue(pattern, p) {
  let length = 0;
  let i = p;
  let j = pattern.length - 1;

  while (i >= 0 && pattern[i] === pattern[j]) {
    length++;
    i--;
    j--;
  }

  return length;
}

function BMISearch(text, pattern) {
  const matches = [];
  const badCharShift = generateBadCharShift(pattern);
  const suffixes = generateSuffixes(pattern);
  const textLength = text.length;
  const patternLength = pattern.length;
  let i = 0;

  while (i <= textLength - patternLength) {
    let j = patternLength - 1;

    while (j >= 0 && pattern[j] === text[i + j]) {
      j--;
    }

    if (j < 0) {
      matches.push(i);
      i += suffixes[0];
    } else {
      const shiftBadChar = badCharShift[text[i + j]] || patternLength;
      const shiftGoodSuffix = suffixes[j];

      i += Math.max(shiftBadChar, shiftGoodSuffix);
    }
  }

  return matches;
}

// Example usage:
const text = "ABCABABABA";
const pattern = "ABA";
const matches = BMISearch(text, pattern);
console.log(matches); // Output: [3, 5, 7]
