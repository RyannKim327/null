function isAnagram(str1, str2) {
  // Step 1: Convert to lowercase
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();

  // Step 2: Remove non-alphanumeric characters
  str1 = str1.replace(/[^a-z0-9]/g, '');
  str2 = str2.replace(/[^a-z0-9]/g, '');

  // Step 3: Check if lengths are equal
  if (str1.length !== str2.length) {
    return false;
  }

  // Step 4: Sort the strings
  const sortedStr1 = str1.split('').sort().join('');
  const sortedStr2 = str2.split('').sort().join('');

  // Step 5: Compare the sorted strings
  return sortedStr1 === sortedStr2;
}

// Examples:
console.log(isAnagram('listen', 'silent'));           // true
console.log(isAnagram('debit card', 'bad credit'));  // true
console.log(isAnagram('test', 'best'));               // false
