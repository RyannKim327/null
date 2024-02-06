function isAnagram(str1, str2) {
  // Convert strings to lowercase and remove non-alphabetic characters
  str1 = str1.toLowerCase().replace(/[^a-z]/g, '');
  str2 = str2.toLowerCase().replace(/[^a-z]/g, '');

  // Sort the strings alphabetically
  str1 = str1.split('').sort().join('');
  str2 = str2.split('').sort().join('');

  // Compare the sorted strings and return the result
  return str1 === str2;
}

// Test the function
console.log(isAnagram('listen', 'silent')); // Output: true
console.log(isAnagram('hello', 'world')); // Output: false
console.log(isAnagram('William Shakespeare', 'I am a weakish speller')); // Output: true
