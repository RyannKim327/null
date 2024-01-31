function areAnagrams(str1, str2) {
  // Convert strings to lowercase and remove whitespace
  str1 = str1.toLowerCase().replace(/\s/g, '');
  str2 = str2.toLowerCase().replace(/\s/g, '');

  // Convert strings into arrays, sort them, then convert back to strings
  const sortedStr1 = str1.split('').sort().join('');
  const sortedStr2 = str2.split('').sort().join('');

  // Compare the sorted strings
  return sortedStr1 === sortedStr2;
}

// Example usage
const string1 = "rail safety";
const string2 = "fairy tales";
console.log(areAnagrams(string1, string2)); // Output: true
