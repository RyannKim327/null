function searchBMH(haystack, needle) {
  const skipTable = {};

  for (let i = 0; i < needle.length - 1; i++) {
    skipTable[needle[i]] = needle.length - 1 - i;
  }

  // Set the default skip value
  const lastChar = needle[needle.length - 1];
  skipTable[lastChar] = skipTable[lastChar] || needle.length;

  // Rest of the algorithm goes here
}
function searchBMH(haystack, needle) {
  const skipTable = {};

  for (let i = 0; i < needle.length - 1; i++) {
    skipTable[needle[i]] = needle.length - 1 - i;
  }

  const lastChar = needle[needle.length - 1];
  skipTable[lastChar] = skipTable[lastChar] || needle.length;

  let haystackIndex = needle.length - 1;
  let needleIndex;

  while (haystackIndex < haystack.length) {
    needleIndex = needle.length - 1;

    while (needleIndex >= 0 && haystack[haystackIndex] === needle[needleIndex]) {
      haystackIndex--;
      needleIndex--;
    }

    if (needleIndex === -1) {
      return haystackIndex + 1;
    }

    const skipValue = skipTable[haystack[haystackIndex]] || needle.length;
    haystackIndex += skipValue;
  }

  return -1;
}
const haystack = "This is a sample text for searching.";
const needle = "sample";
const index = searchBMH(haystack, needle);
console.log(index); // Output: 10
