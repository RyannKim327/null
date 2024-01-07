class Node {
  constructor() {
    this.children = {};
    this.indexes = [];
  }
}
class SuffixTree {
  constructor(input) {
    this.root = new Node();
    this.text = input;
    
    // Build the suffix tree
    this.buildSuffixTree();
  }

  // Function to build the suffix tree
  buildSuffixTree() {
    const n = this.text.length;
    for (let i = 0; i < n; i++) {
      let suffix = this.text.substring(i);
      this.insertSuffix(suffix, i);
    }
  }

  // Function to insert a suffix into the suffix tree
  insertSuffix(suffix, position) {
    let currentNode = this.root;
    for (let i = 0; i < suffix.length; i++) {
      const char = suffix[i];
      if (!currentNode.children[char]) {
        currentNode.children[char] = new Node();
      }
      currentNode = currentNode.children[char];
    }
    // Store the position of the suffix
    currentNode.indexes.push(position);
  }
}
// Example usage
const input = "banana";
const suffixTree = new SuffixTree(input);

console.log(suffixTree.root);
