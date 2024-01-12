function longestCommonSubstring(str1, str2) {
  let maxLength = 0; // Length of the longest common substring
  let endIndex = 0; // Index of the last character of the longest common substring

  const table = Array.from({ length: str1.length + 1 }, () =>
    Array.from({ length: str2.length + 1 }, () => 0)
  );

  for (let i = 1; i <= str1.length; i++) {
    for (let j = 1; j <= str2.length; j++) {
      if (str1[i - 1] === str2[j - 1]) {
        table[i][j] = table[i - 1][j - 1] + 1;
        if (table[i][j] > maxLength) {
          maxLength = table[i][j];
          endIndex = i - 1;
        }
      } else {
        table[i][j] = 0;
      }
    }
  }

  if (maxLength === 0) {
    return ''; // No common substring found
  }

  return str1.slice(endIndex - maxLength + 1, endIndex + 1);
}

// Usage example:
const str1 = 'Hello, World!';
const str2 = 'Welcome to the World!';
const longestSubstring = longestCommonSubstring(str1, str2);
console.log(longestSubstring); // Output: " World"
