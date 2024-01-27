function isAnagram(str1, str2) {
  // Remove spaces and punctuation, convert to lowercase
  const cleanedStr1 = str1.replace(/[^\w]/g, '').toLowerCase();
  const cleanedStr2 = str2.replace(/[^\w]/g, '').toLowerCase();

  // Convert to arrays and sort alphabetically
  const arr1 = [...cleanedStr1].sort();
  const arr2 = [...cleanedStr2].sort();

  // Compare sorted arrays
  return arr1.join('') === arr2.join('');
}

// Example usage
const string1 = 'listen';
const string2 = 'silent';
console.log(isAnagram(string1, string2));  // Output: true
