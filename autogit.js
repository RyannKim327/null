function createPrefixTable(pattern) {
  const table = [0];
  let prefixLength = 0;
  let i = 1;

  while (i < pattern.length) {
    if (pattern[i] === pattern[prefixLength]) {
      prefixLength++;
      table[i] = prefixLength;
      i++;
    } else {
      if (prefixLength !== 0) {
        prefixLength = table[prefixLength - 1];
      } else {
        table[i] = 0;
        i++;
      }
    }
  }

  return table;
}
function KMPSearch(text, pattern) {
  const prefixTable = createPrefixTable(pattern);
  const result = [];
  let i = 0; // index for text
  let j = 0; // index for pattern

  while (i < text.length) {
    if (pattern[j] === text[i]) {
      j++;
      i++;
    }

    if (j === pattern.length) {
      result.push(i - j); // match found, store the starting index
      j = prefixTable[j - 1]; // retrieve the next prefix length from the table
    } else if (i < text.length && pattern[j] !== text[i]) {
      if (j !== 0) {
        j = prefixTable[j - 1];
      } else {
        i++;
      }
    }
  }

  return result;
}
const text = 'AABAACAADAABAABA';
const pattern = 'AABA';

const result = KMPSearch(text, pattern);
console.log(result); // Output: [0, 9, 12]
