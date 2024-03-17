// Define a node for the suffix tree
class Node {
  constructor() {
    this.children = {}; // Object to store child nodes
  }
}

// Define the Suffix Tree class
class SuffixTree {
  constructor(text) {
    this.root = new Node(); // Create a root node
    this.buildSuffixTree(text); // Build the suffix tree from the input text
  }

  // Function to build the suffix tree from the given text
  buildSuffixTree(text) {
    for (let i = 0; i < text.length; i++) {
      this.addSuffix(text.substr(i), i); // Add each suffix of the text to the tree
    }
  }

  // Function to add a suffix to the suffix tree
  addSuffix(suffix, index) {
    let currentNode = this.root; // Start from the root node

    for (let i = 0; i < suffix.length; i++) {
      const char = suffix[i];
      if (!(char in currentNode.children)) {
        currentNode.children[char] = new Node(); // Create a new node if the character doesn't exist
      }
      currentNode = currentNode.children[char]; // Move to the child node
    }

    // Store the index of the suffix at the leaf node
    currentNode.index = index;
  }
}

// Usage example
const text = "banana";
const suffixTree = new SuffixTree(text);

// Print the suffix tree
console.log(suffixTree);
