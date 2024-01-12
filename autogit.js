function isAnagram(str1, str2) {
  // Step 1: Remove non-alphanumeric characters and convert to lowercase
  const cleanStr1 = str1.replace(/[^a-z0-9]/gi, '').toLowerCase();
  const cleanStr2 = str2.replace(/[^a-z0-9]/gi, '').toLowerCase();

  // Step 2: Split strings into character arrays
  const arr1 = cleanStr1.split('');
  const arr2 = cleanStr2.split('');

  // Step 3: Sort character arrays
  arr1.sort();
  arr2.sort();

  // Step 4: Join sorted arrays into strings
  const sortedStr1 = arr1.join('');
  const sortedStr2 = arr2.join('');

  // Step 5: Compare the two sorted strings
  return sortedStr1 === sortedStr2;
}

// Usage
const string1 = "listen";
const string2 = "silent";
const result = isAnagram(string1, string2);

console.log(result);  // Output: true
