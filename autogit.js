function computePrefixTable(pattern) {
  const prefixTable = [0];
  let length = 0;
  let i = 1;
  
  while (i < pattern.length) {
    if (pattern[i] === pattern[length]) {
      length++;
      prefixTable[i] = length;
      i++;
    } else {
      if (length !== 0) {
        length = prefixTable[length - 1];
      } else {
        prefixTable[i] = 0;
        i++;
      }
    }
  }
  
  return prefixTable;
}
function KMP(text, pattern) {
  const prefixTable = computePrefixTable(pattern);
  const occurrences = [];
  let i = 0;
  let j = 0;
  
  while (i < text.length) {
    if (pattern[j] === text[i]) {
      i++;
      j++;
    }
    
    if (j === pattern.length) {
      occurrences.push(i - j);
      j = prefixTable[j - 1];
    } else if (i < text.length && pattern[j] !== text[i]) {
      if (j !== 0) {
        j = prefixTable[j - 1];
      } else {
        i++;
      }
    }
  }
  
  return occurrences;
}
const text = "ABCABCDABABCDABCDABDE";
const pattern = "ABCDABD";

const occurrences = KMP(text, pattern);
console.log(occurrences); // [11]
