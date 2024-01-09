function areAnagrams(str1, str2) {
  // Remove non-alphabetic characters and spaces
  str1 = str1.replace(/[^a-z]/gi, '').toLowerCase();
  str2 = str2.replace(/[^a-z]/gi, '').toLowerCase();

  // Sort the characters alphabetically
  str1 = str1.split('').sort().join('');
  str2 = str2.split('').sort().join('');

  // Compare the sorted strings
  return str1 === str2;
}

// Example usage
console.log(areAnagrams('restful', 'fluster')); // Output: true
console.log(areAnagrams('hello', 'world'));     // Output: false
