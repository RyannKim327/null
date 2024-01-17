class Node {
  constructor(startIndex, endIndex) {
    this.startIndex = startIndex;
    this.endIndex = endIndex;
    this.children = {};
  }
}

class SuffixTree {
  constructor(text) {
    this.text = text;
    this.root = new Node(-1, -1); // Create the root node
    // Call tree construction method here
  }

  // Method to add a suffix to the tree
  addSuffix(suffix, startIndex) {
    // Implement this method
  }

  // Method to construct the entire suffix tree from the text
  constructTree() {
    // Implement Ukkonen's or McCreight's algorithm here
  }

  // Method to search for a pattern in the tree
  search(pattern) {
    // Implement pattern matching logic here
  }
}

// Usage
const text = "banana";
const suffixTree = new SuffixTree(text);
suffixTree.constructTree();
const pattern = "ana";
console.log(suffixTree.search(pattern)); // Output: true
