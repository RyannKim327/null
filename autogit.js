function areAnagrams(string1, string2) {
  // Convert strings to character arrays
  const charArray1 = string1.split('');
  const charArray2 = string2.split('');

  // Sort character arrays in alphabetical order
  const sortedArray1 = charArray1.sort().join('');
  const sortedArray2 = charArray2.sort().join('');

  // Compare sorted strings
  return sortedArray1 === sortedArray2;
}

// Example usage
const string1 = "listen";
const string2 = "silent";
console.log(areAnagrams(string1, string2));  // Output: true
