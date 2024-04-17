function isAnagram(str1, str2) {
  // Remove any non-word characters and convert the strings to lowercase
  str1 = str1.replace(/[\W_]/g, '').toLowerCase();
  str2 = str2.replace(/[\W_]/g, '').toLowerCase();

  // Check if the lengths of the two strings are different
  if (str1.length !== str2.length) {
    return false;
  }

  // Use an object to store the character frequencies of str1
  const charFreq = {};
  for (let char of str1) {
    charFreq[char] = (charFreq[char] || 0) + 1;
  }

  // Compare the character frequencies of str2 with str1
  for (let char of str2) {
    if (!charFreq[char]) {
      return false;
    } else {
      charFreq[char]--;
    }
  }

  return true;
}

// Test the function
const string1 = "listen";
const string2 = "silent";
console.log(isAnagram(string1, string2)); // Output: true
