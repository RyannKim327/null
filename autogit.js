npm install suffix-tree
const SuffixTree = require('suffix-tree');
const inputString = 'banana';
const suffixTree = new SuffixTree(inputString);
suffixTree.build();
// Find all occurrences of a pattern in the input string
const pattern = 'ana';
const occurrences = suffixTree.findIndicesOfPattern(pattern);
console.log(occurrences); // Output: [1, 3]

// Find the longest common substring between two strings
const otherString = 'ananas';
const longestCommonSubstring = suffixTree.longestCommonSubstring(otherString);
console.log(longestCommonSubstring); // Output: 'ana'
