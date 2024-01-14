function isAnagram(str1, str2) {
  // Remove any non-alphanumeric characters and convert to lowercase
  let cleanStr1 = str1.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  let cleanStr2 = str2.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

  // Sort the characters in the strings
  let sortedStr1 = cleanStr1.split('').sort().join('');
  let sortedStr2 = cleanStr2.split('').sort().join('');

  // Compare the sorted strings
  return sortedStr1 === sortedStr2;
}

// Example usage
console.log(isAnagram('listen', 'silent')); // true
console.log(isAnagram('hello', 'goodbye')); // false
