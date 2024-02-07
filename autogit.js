function buildTable(pattern) {
  const table = new Array(pattern.length).fill(0);
  let i = 1, j = 0;

  while (i < pattern.length) {
    if (pattern[i] === pattern[j]) {
      table[i] = j + 1;
      i++;
      j++;
    } else {
      if (j === 0) {
        table[i] = 0;
        i++;
      } else {
        j = table[j - 1];
      }
    }
  }

  return table;
}

function stringMatch(text, pattern) {
  const matches = [];

  if (pattern.length > text.length) {
    return matches;
  }

  const table = buildTable(pattern);
  let i = 0, j = 0;

  while (i < text.length) {
    if (text[i] === pattern[j]) {
      i++;
      j++;

      if (j === pattern.length) {
        matches.push(i - j);
        j = table[j - 1];
      }
    } else {
      if (j === 0) {
        i++;
      } else {
        j = table[j - 1];
      }
    }
  }

  return matches;
}
const text = "ababcabcabababd";
const pattern = "ababd";
const matches = stringMatch(text, pattern);
console.log(matches); // Output: [10]
