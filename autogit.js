function isAnagram(str1, str2) {
  // Remove spaces and convert to lowercase
  str1 = str1.replace(/[^\w]/g, '').toLowerCase();
  str2 = str2.replace(/[^\w]/g, '').toLowerCase();

  // Check if the strings are of equal length
  if (str1.length !== str2.length) {
    return false;
  }

  // Sort the characters of both strings and compare
  return str1.split('').sort().join('') === str2.split('').sort().join('');
}

// Test the function
const string1 = "listen";
const string2 = "silent";
console.log(isAnagram(string1, string2)); // Output: true
