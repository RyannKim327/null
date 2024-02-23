function buildSkipTable(pattern) {
  const table = new Array(256).fill(pattern.length);

  for (let i = 0; i < pattern.length - 1; i++) {
    table[pattern.charCodeAt(i)] = pattern.length - 1 - i;
  }

  return table;
}
function boyerMooreHorspool(text, pattern) {
  const skipTable = buildSkipTable(pattern);
  const n = text.length;
  const m = pattern.length;

  let i = m - 1;

  while (i < n) {
    let k = 0;

    while (k < m && pattern[m - 1 - k] === text[i - k]) {
      k++;
    }

    if (k === m) {
      return i - m + 1; // pattern found
    }

    i += skipTable[text.charCodeAt(i)];
  }

  return -1; // pattern not found
}
const text = "Hello World, Hello!";
const pattern = "Hello";
const index = boyerMooreHorspool(text, pattern);

console.log("Pattern found at index:", index);
