function areAnagrams(str1, str2) {
  // Remove spaces and special characters, then convert to lowercase
  str1 = str1.replace(/[^\w]/g, '').toLowerCase();
  str2 = str2.replace(/[^\w]/g, '').toLowerCase();
  
  // Sort characters alphabetically
  str1 = str1.split('').sort().join('');
  str2 = str2.split('').sort().join('');
  
  // Compare the sorted strings
  return str1 === str2;
}

// Example usage
const string1 = "listen";
const string2 = "silent";
console.log(areAnagrams(string1, string2)); // Output: true

const string3 = "hello";
const string4 = "world";
console.log(areAnagrams(string3, string4)); // Output: false
