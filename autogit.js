function areAnagrams(str1, str2) {
  // Remove whitespace and punctuation, convert to lowercase
  const cleanStr1 = str1.replace(/[^a-z0-9]/gi, '').toLowerCase();
  const cleanStr2 = str2.replace(/[^a-z0-9]/gi, '').toLowerCase();

  // Sort the strings
  const sortedStr1 = cleanStr1.split('').sort().join('');
  const sortedStr2 = cleanStr2.split('').sort().join('');

  // Compare the sorted strings
  return sortedStr1 === sortedStr2;
}

// Example usage:
const string1 = "listen";
const string2 = "silent";
console.log(areAnagrams(string1, string2)); // Output: true
