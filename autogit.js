function areAnagrams(str1, str2) {
  // Convert strings to lowercase and remove non-alphabetic characters
  str1 = str1.toLowerCase().replace(/[^a-z]/g, '');
  str2 = str2.toLowerCase().replace(/[^a-z]/g, '');

  // Sort both strings
  str1 = str1.split('').sort().join('');
  str2 = str2.split('').sort().join('');

  // Compare the sorted strings
  return str1 === str2;
}

// Example usage
console.log(areAnagrams('listen', 'silent')); // Output: true
console.log(areAnagrams('abcde', 'edcba')); // Output: false (different lengths)
console.log(areAnagrams('listen', 'silents')); // Output: false (different letters)
