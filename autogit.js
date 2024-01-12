function isAnagram(str1, str2) {
  // Remove any non-alphabetic characters and convert to lowercase
  const cleanStr1 = str1.replace(/[^A-Za-z]/g, "").toLowerCase();
  const cleanStr2 = str2.replace(/[^A-Za-z]/g, "").toLowerCase();

  // Check if the two cleaned strings have the same length
  if (cleanStr1.length !== cleanStr2.length) {
    return false;
  }

  // Create character frequency maps for both strings
  const frequencyMap1 = {};
  const frequencyMap2 = {};

  // Populate frequency map1
  for (let char of cleanStr1) {
    frequencyMap1[char] = (frequencyMap1[char] || 0) + 1;
  }

  // Populate frequency map2
  for (let char of cleanStr2) {
    frequencyMap2[char] = (frequencyMap2[char] || 0) + 1;
  }

  // Compare the frequency maps
  for (let char in frequencyMap1) {
    if (frequencyMap1[char] !== frequencyMap2[char]) {
      return false;
    }
  }

  return true;
}

// Example usage
const str1 = "listen";
const str2 = "silent";

console.log(isAnagram(str1, str2)); // Output: true
