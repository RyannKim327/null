class Node {
  constructor() {
    // Each node contains a map of characters to child nodes
    this.children = new Map();
  }
}

class SuffixTree {
  constructor(string) {
    this.root = new Node(); // The root of the suffix tree
    this.string = string; // The input string
    this.buildTree();
  }

  // Function to build the suffix tree
  buildTree() {
    // Add all suffixes of the input string to the tree
    for (let i = 0; i < this.string.length; i++) {
      this.addSuffix(i);
    }
  }

  // Function to add a suffix to the tree
  addSuffix(suffixStart) {
    let node = this.root; // Start at the root
    const suffix = this.string.slice(suffixStart); // Get the suffix from the input string

    // Traverse the tree for the suffix
    for (let i = 0; i < suffix.length; i++) {
      const char = suffix[i];
      if (!node.children.has(char)) {
        // If a character is not found, create a new child node
        node.children.set(char, new Node());
      }
      
      // Move to the next node
      node = node.children.get(char);
    }
  }
}
const inputString = "banana";
const suffixTree = new SuffixTree(inputString);
