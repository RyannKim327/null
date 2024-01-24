function areAnagrams(str1, str2) {
  // Remove whitespace and convert to lowercase
  str1 = str1.replace(/\s/g, '').toLowerCase();
  str2 = str2.replace(/\s/g, '').toLowerCase();

  // Check if lengths are different
  if (str1.length !== str2.length) {
    return false;
  }

  // Convert strings to arrays and sort them
  const sortedStr1 = str1.split('').sort().join('');
  const sortedStr2 = str2.split('').sort().join('');

  // Compare the sorted arrays
  return sortedStr1 === sortedStr2;
}

// Example usage:
console.log(areAnagrams('listen', 'silent'));   // true
console.log(areAnagrams('hello', 'world'));     // false
console.log(areAnagrams('Debit card', 'Bad credit'));   // true
