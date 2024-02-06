function boyerMooreHorspool(haystack, needle) {
  // Step 2: Preprocessing
  const needleLength = needle.length;
  const haystackLength = haystack.length;

  // Step 3: Preprocessing Bad Character Table
  const badCharTable = {};

  for (let i = 0; i < needleLength - 1; i++) {
    badCharTable[needle[i]] = needleLength - 1 - i;
  }

  // Step 4: Searching
  let haystackIndex = needleLength - 1;

  while (haystackIndex < haystackLength) {
    let needleIndex = needleLength - 1;

    while (needleIndex >= 0 && haystack[haystackIndex] === needle[needleIndex]) {
      haystackIndex--;
      needleIndex--;
    }

    if (needleIndex === -1) {
      return haystackIndex + 1; // Match found
    } else {
      const charInHaystack = haystack[haystackIndex];
      const skipLen = badCharTable[charInHaystack] || needleLength;

      haystackIndex += skipLen;
    }
  }

  return -1; // No match found
}
const haystack = "The quick brown fox jumps over the lazy dog";
const needle = "fox";

const result = boyerMooreHorspool(haystack, needle);
if (result !== -1) {
  console.log("Match found at index:", result);
} else {
  console.log("No match found");
}
