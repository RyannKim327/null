function badCharacterHeuristic(pattern) {
  let badCharacters = {};

  for (let i = 0; i < pattern.length - 1; i++) {
    badCharacters[pattern[i]] = pattern.length - 1 - i;
  }

  return badCharacters;
}
function goodSuffixHeuristic(pattern) {
  let m = pattern.length;
  let suffixes = new Array(m + 1).fill(0);
  let borders = new Array(m + 1).fill(0);
  let goodSuffixes = {};

  // Preprocessing step 1: Fill suffixes array
  let j = m; // length of the border
  borders[m] = j;
  for (let i = m - 1; i >= 0; i--) {
    while (j < m && pattern[i] !== pattern[j]) {
      if (suffixes[j + 1] === 0) {
        suffixes[j + 1] = j - i;
      }
      j = borders[j + 1];
    }
    j--;
    borders[i] = j;
  }

  // Preprocessing step 2: Fill suffixes array
  j = borders[0];
  for (let i = 0; i <= m; i++) {
    if (suffixes[i] === 0) {
      suffixes[i] = j;
    }
    if (i === j) {
      j = borders[j];
    }
  }

  // Preprocessing step 3: Fill goodSuffixes object
  for (let i = 0; i < m; i++) {
    goodSuffixes[i] = m - suffixes[i + 1];
  }
  return goodSuffixes;
}
function boyerMooreSearch(text, pattern) {
  let n = text.length;
  let m = pattern.length;
  let badCharacters = badCharacterHeuristic(pattern);
  let goodSuffixes = goodSuffixHeuristic(pattern);
  let occurrences = [];

  let shift = 0;
  while (shift <= n - m) {
    let j = m - 1;

    while (j >= 0 && pattern[j] === text[shift + j]) {
      j--;
    }

    if (j < 0) {
      occurrences.push(shift);
      shift += goodSuffixes[0];
    } else {
      let badCharShift = badCharacters[text[shift + j]] || m;
      let goodSuffixShift = goodSuffixes[j];

      shift += Math.max(badCharShift, goodSuffixShift);
    }
  }

  return occurrences;
}
let text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";
let pattern = "sit";

let occurrences = boyerMooreSearch(text, pattern);
console.log("Occurrences found at positions:", occurrences);
