function preprocessPattern(pattern) {
  const badCharacters = {};
  const length = pattern.length;

  for (let i = 0; i < length - 1; i++) {
    badCharacters[pattern[i]] = length - 1 - i;
  }

  return badCharacters;
}
function boyerMoore(text, pattern) {
  const badCharacters = preprocessPattern(pattern);
  const textLength = text.length;
  const patternLength = pattern.length;
  let textIndex = 0;

  while (textIndex <= textLength - patternLength) {
    let patternIndex = patternLength - 1;

    while (patternIndex >= 0 && pattern[patternIndex] === text[textIndex + patternIndex]) {
      patternIndex--;
    }

    if (patternIndex === -1) {
      return textIndex; // match found, return the starting index
    }

    const badCharacterShift = badCharacters[text[textIndex + patternIndex]];

    textIndex += badCharacterShift || (patternIndex + 1);
  }

  return -1; // no match found
}
const text = "Lorem ipsum dolor sit amet";
const pattern = "ipsum";
const resultIndex = boyerMoore(text, pattern);

if (resultIndex === -1) {
  console.log("Pattern not found");
} else {
  console.log(`Pattern found at index ${resultIndex}`);
}
