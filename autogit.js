function findLongestCommonSubstring(str1, str2) {
  const length1 = str1.length;
  const length2 = str2.length;
  
  // Create a matrix to store the lengths of common substrings
  const matrix = Array(length1 + 1).fill(0).map(() => Array(length2 + 1).fill(0));
  
  let longestLength = 0; // Length of the longest common substring
  let endIndex = 0; // Index where the longest common substring ends
  
  for (let i = 1; i <= length1; i++) {
    for (let j = 1; j <= length2; j++) {
      if (str1[i - 1] === str2[j - 1]) {
        matrix[i][j] = matrix[i - 1][j - 1] + 1;
        if (matrix[i][j] > longestLength) {
          longestLength = matrix[i][j];
          endIndex = i - 1;
        }
      } else {
        matrix[i][j] = 0; // No common substring
      }
    }
  }

  // Extract the longest common substring from str1 based on the endIndex
  const longestSubstring = str1.substr(endIndex - longestLength + 1, longestLength);
  return longestSubstring;
}

// Example usage
const string1 = "JavaScript is great";
const string2 = "Python is also great";
const result = findLongestCommonSubstring(string1, string2);
console.log(result); // Output: " is great"
