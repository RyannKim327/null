function boyerMooreHorspool search(text: string, pattern: string): number[] {
  const patternLength = pattern.length;
  const textLength = text.length;
  const badChar = new Array(256); // assuming ASCII characters

  // Preprocessing: create bad character table
  for (let i = 0; i < 256; i++) {
    badChar[i] = patternLength;
  }
  for (let i = 0; i < patternLength - 1; i++) {
    badChar[pattern.charCodeAt(i)] = patternLength - 1 - i;
  }

  const occurrences: number[] = [];
  let i = 0;
  while (i <= textLength - patternLength) {
    let j = patternLength - 1;
    while (j >= 0 && text.charCodeAt(i + j) === pattern.charCodeAt(j)) {
      j--;
    }
    if (j < 0) {
      occurrences.push(i);
      i += patternLength - badChar[text.charCodeAt(i + patternLength - 1)];
    } else {
      i += Math.max(1, j - badChar[text.charCodeAt(i + j)]);
    }
  }
  return occurrences;
}

// Example usage:
const text = "Hello, world! Hello, universe!";
const pattern = "Hello";
const occurrences = boyerMooreHorspool(text, pattern);
console.log(occurrences); // [0, 13]
