function boyerMooreHorspool(text, pattern) {
  let skipTable = {};

  for (let i = 0; i < pattern.length - 1; i++) {
    skipTable[pattern[i]] = pattern.length - 1 - i;
  }

  let n = text.length;
  let m = pattern.length;
  let i = 0;

  while (i <= n - m) {
    if (pattern === text.slice(i, i + m)) {
      return i;
    } else {
      i += skipTable[text[i + m - 1]] || m;
    }
  }

  return -1;
}

// Example usage:
let text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";
let pattern = "ipsum";

console.log(boyerMooreHorspool(text, pattern)); // Output: 6
