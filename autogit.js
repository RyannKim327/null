function areAnagrams(str1, str2) {
  // Conversion to lowercase
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();

  // Removing non-alphabetic characters
  str1 = str1.replace(/[^a-z]/g, '');
  str2 = str2.replace(/[^a-z]/g, '');

  // Sort the strings
  str1 = str1.split('').sort().join('');
  str2 = str2.split('').sort().join('');

  // Compare the sorted strings
  return str1 === str2;
}

// Example usage
const string1 = "Listen";
const string2 = "Silent";
console.log(areAnagrams(string1, string2)); // Output: true
