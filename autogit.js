function createBadCharTable(pattern) {
  const table = {};

  for (let i = 0; i < pattern.length - 1; i++) {
    table[pattern[i]] = pattern.length - 1 - i;
  }

  return table;
}

function createGoodSuffixTable(pattern) {
  const table = Array(pattern.length).fill(0);
  const suffixes = [];
  let lastPrefixPosition = pattern.length;

  for (let i = pattern.length - 1; i >= 0; i--) {
    if (isPrefix(pattern, i + 1)) {
      lastPrefixPosition = i + 1;
    }

    table[pattern.length - 1 - i] = lastPrefixPosition - i + pattern.length - 1;
    suffixes.push(i);
  }

  for (let i = 0; i < pattern.length - 1; i++) {
    const length = suffixLength(pattern, i);
    table[length] = pattern.length - 1 - i + length;
  }

  return table;
}

function isPrefix(pattern, p) {
  for (let i = p, j = 0; i < pattern.length; i++, j++) {
    if (pattern[i] !== pattern[j]) {
      return false;
    }
  }
  return true;
}

function suffixLength(pattern, p) {
  let len = 0;
  let j = pattern.length - 1;

  for (let i = p; i >= 0 && pattern[i] === pattern[j]; i--) {
    len++;
    j--;
  }

  return len;
}

function boyerMoore(pattern, text) {
  const positions = [];

  if (pattern.length > text.length) {
    return positions;
  }

  const badCharTable = createBadCharTable(pattern);
  const goodSuffixTable = createGoodSuffixTable(pattern);
  let i = pattern.length - 1;
  let j = pattern.length - 1;

  while (i < text.length) {
    if (pattern[j] === text[i]) {
      if (j === 0) {
        positions.push(i);
        i += pattern.length;
      } else {
        i--;
        j--;
      }
    } else {
      i += Math.max(badCharTable[text[i]] || pattern.length, goodSuffixTable[j]);
      j = pattern.length - 1;
    }
  }

  return positions;
}

// Example usage:
const text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';
const pattern = 'ipsum';

const positions = boyerMoore(pattern, text);
console.log(positions); // [6]
