npm install suffix-tree
const suffixTree = require('suffix-tree');

// Create a new suffix tree
const tree = new suffixTree.Tree("banana");

// Print the suffix tree structure
console.log(tree.root);
