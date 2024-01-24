function areAnagrams(str1, str2) {
  // Remove whitespace and punctuation
  const regExp = /[^\w]/g;
  str1 = str1.replace(regExp, '').toLowerCase();
  str2 = str2.replace(regExp, '').toLowerCase();

  // Convert strings to arrays, sort, and then join back into strings
  const sortedStr1 = str1.split('').sort().join('');
  const sortedStr2 = str2.split('').sort().join('');

  // Compare the sorted strings for equality
  return sortedStr1 === sortedStr2;
}

// Example usage:
console.log(areAnagrams('listen', 'silent')); // true
console.log(areAnagrams('hello', 'world')); // false
