function longestCommonSubstring(str1, str2) {
  // Create a table to store the lengths of common substrings
  const table = Array(str1.length + 1).fill(0).map(() => Array(str2.length + 1).fill(0));
  
  // Variables to keep track of the longest substring and its length
  let longestLength = 0;
  let longestIndex = 0;

  for (let i = 1; i <= str1.length; i++) {
    for (let j = 1; j <= str2.length; j++) {
      if (str1[i - 1] === str2[j - 1]) {
        // If characters match, the length of the common substring increases by 1
        table[i][j] = table[i - 1][j - 1] + 1;

        if (table[i][j] > longestLength) {
          // Update longest substring length and index
          longestLength = table[i][j];
          longestIndex = i;
        }
      } else {
        // If characters don't match, the length of the common substring is 0
        table[i][j] = 0;
      }
    }
  }
  
  // Extract the longest common substring using the longestIndex and longestLength
  const longestSubstring = str1.slice(longestIndex - longestLength, longestIndex);

  return longestSubstring;
}
const str1 = "abcdefg";
const str2 = "xyzcdef";

const longestSubstring = longestCommonSubstring(str1, str2);
console.log(longestSubstring); // Output: "cdef"
