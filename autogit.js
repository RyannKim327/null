function areAnagrams(str1, str2) {
  // Remove non-alphabetic characters and convert to lowercase
  str1 = str1.replace(/[^a-z]/gi, '').toLowerCase();
  str2 = str2.replace(/[^a-z]/gi, '').toLowerCase();

  // Convert strings to arrays and sort them
  const arr1 = str1.split('').sort();
  const arr2 = str2.split('').sort();

  // Compare the sorted arrays
  return arr1.join('') === arr2.join('');
}

// Example usage
const string1 = "listen";
const string2 = "silent";
console.log(areAnagrams(string1, string2)); // Output: true
