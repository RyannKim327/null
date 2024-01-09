function areAnagrams(str1, str2) {
  // Remove non-alphabetic characters and convert to lowercase
  str1 = str1.toLowerCase().replace(/[^a-z]/g, '');
  str2 = str2.toLowerCase().replace(/[^a-z]/g, '');

  // Convert strings to sorted arrays of characters
  const arr1 = str1.split('').sort();
  const arr2 = str2.split('').sort();

  // Join sorted arrays back into strings and compare
  const sortedStr1 = arr1.join('');
  const sortedStr2 = arr2.join('');

  return sortedStr1 === sortedStr2;
}

// Example usage
const string1 = "listen";
const string2 = "silent";
console.log(areAnagrams(string1, string2)); // Output: true
