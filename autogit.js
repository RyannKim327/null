function isAnagram(str1, str2) {
  // Remove non-alphabetic characters and convert to lowercase
  str1 = str1.replace(/[^\w]/g, '').toLowerCase();
  str2 = str2.replace(/[^\w]/g, '').toLowerCase();

  // Create frequency tables for both strings
  const freqTable1 = createFrequencyTable(str1);
  const freqTable2 = createFrequencyTable(str2);

  // Compare the character frequency tables
  return compareFrequencyTables(freqTable1, freqTable2);
}

function createFrequencyTable(str) {
  const freqTable = {};
  for (let char of str) {
    freqTable[char] = (freqTable[char] || 0) + 1;
  }
  return freqTable;
}

function compareFrequencyTables(freqTable1, freqTable2) {
  if (Object.keys(freqTable1).length !== Object.keys(freqTable2).length) {
    return false;
  }

  for (let key in freqTable1) {
    if (freqTable1[key] !== freqTable2[key]) {
      return false;
    }
  }

  return true;
}

// Example usage:
console.log(isAnagram('listen', 'silent')); // Output: true
console.log(isAnagram('hello', 'world')); // Output: false
