npm install suffix-tree
const SuffixTree = require('suffix-tree');

// Create a new suffix tree
const tree = new SuffixTree('banana');

// Find the index of a substring in the suffix tree
const index = tree.find('ana');
console.log(index); // Output: 1

// Check if a substring exists in the suffix tree
const exists = tree.contains('nan');
console.log(exists); // Output: true
