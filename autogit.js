class Node {
  constructor() {
    // Each node has a children map, where the key is the character
    // and the value is the corresponding child node.
    this.children = new Map();
  }
}
class SuffixTree {
  constructor() {
    // The root node of the suffix tree
    this.root = new Node();
  }
  
  // Add a suffix to the tree
  addSuffix(suffix) {
    let current = this.root;
    
    for (let i = 0; i < suffix.length; i++) {
      const char = suffix[i];
      
      if (!current.children.has(char)) {
        // If the character doesn't exist in the children, create a new node
        const newNode = new Node();
        current.children.set(char, newNode);
      }
      
      // Move to the next node
      current = current.children.get(char);
    }
  }
}
function buildSuffixTree(str) {
  const suffixTree = new SuffixTree();
  
  // Add all suffixes of the given string to the tree
  for (let i = 0; i < str.length; i++) {
    suffixTree.addSuffix(str.slice(i));
  }
  
  return suffixTree;
}
const str = "banana";
const suffixTree = buildSuffixTree(str);
console.log(suffixTree);
