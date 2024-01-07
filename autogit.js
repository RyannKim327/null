function buildPrefixTable(pattern) {
  const table = new Array(pattern.length);
  let i = 0;
  let j = -1;
  table[i] = j;
  
  while (i < pattern.length) {
    while (j >= 0 && pattern.charAt(i) !== pattern.charAt(j)) {
      j = table[j];
    }
    i++;
    j++;
    table[i] = j;
  }
  return table;
}
function stringMatch(text, pattern) {
  const prefixTable = buildPrefixTable(pattern);
  let i = 0;
  let j = 0;
  
  while (i < text.length) {
    if (text.charAt(i) === pattern.charAt(j)) {
      i++;
      j++;
      
      if (j === pattern.length) {
        return i - j; // Match found, return the starting index
      }
    } else if (j > 0) {
      j = prefixTable[j];
    } else {
      i++;
    }
  }
  
  return -1; // No match found
}
const text = "Lorem ipsum dolor sit amet";
const pattern = "ipsum";

console.log(stringMatch(text, pattern)); // Output: 6
