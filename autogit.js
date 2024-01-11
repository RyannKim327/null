function badCharHeuristic(pattern) {
  const length = pattern.length;
  const badChar = Array(256).fill(-1);

  for (let i = 0; i < length; i++) {
    badChar[pattern[i].charCodeAt(0)] = i;
  }

  return badChar;
}
function boyerMooreSearch(text, pattern) {
  const textLength = text.length;
  const patternLength = pattern.length;

  const badChar = badCharHeuristic(pattern);
  const matches = [];

  let shift = 0;

  while (shift <= textLength - patternLength) {
    let i = patternLength - 1;

    while (i >= 0 && pattern[i] === text[shift + i]) {
      i--;
    }

    if (i < 0) {
      matches.push(shift);
      shift += (shift + patternLength < textLength) ? patternLength - badChar[text[shift + patternLength].charCodeAt(0)] : 1;
    } else {
      shift += Math.max(1, i - badChar[text[shift + i].charCodeAt(0)]);
    }
  }

  return matches;
}
const text = "ABABDABACDABABCABAB";
const pattern = "ABABCABAB";

const matches = boyerMooreSearch(text, pattern);

if (matches.length > 0) {
  console.log(`Pattern found at index(es): ${matches.join(", ")}`);
} else {
  console.log("Pattern not found");
}
