class Node {
  constructor() {
    this.children = {}; // Object to store child nodes
  }
}
class SuffixTree {
  constructor() {
    this.root = new Node(); // Create the root node
    this.wordEndSymbol = '$'; // Symbol to mark the end of a word
  }

  // Function to build the suffix tree from a given string
  buildSuffixTree(string) {
    for (let i = 0; i < string.length; i++) {
      const suffix = string.substring(i); // Get suffix starting from ith character
      this.insertSuffix(suffix);
    }
  }

  // Function to insert a suffix into the suffix tree
  insertSuffix(suffix) {
    let currentNode = this.root;
    for (let i = 0; i < suffix.length; i++) {
      const char = suffix[i];
      if (!(char in currentNode.children)) {
        // If the current character is not a child of the current node, create a new node
        currentNode.children[char] = new Node();
      }
      currentNode = currentNode.children[char]; // Move to the next node
    }
    currentNode.children[this.wordEndSymbol] = null; // Mark the end of the suffix
  }

  // Function to search for a pattern in the suffix tree
  search(pattern) {
    let currentNode = this.root;
    for (let i = 0; i < pattern.length; i++) {
      const char = pattern[i];
      if (!(char in currentNode.children)) {
        // If the current character is not a child of the current node, pattern doesn't exist
        return false;
      }
      currentNode = currentNode.children[char]; // Move to the next node
    }
    return this.wordEndSymbol in currentNode.children; // Check if the pattern reaches the end
  }
}
// Create a new SuffixTree object
const suffixTree = new SuffixTree();

// Build the suffix tree from a sample string
suffixTree.buildSuffixTree('banana');

// Search for patterns in the suffix tree
console.log(suffixTree.search('ana')); // true
console.log(suffixTree.search('nan')); // true
console.log(suffixTree.search('apple')); // false
