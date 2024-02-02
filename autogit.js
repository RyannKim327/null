class Node {
  constructor() {
    this.children = {}; // Mapping of characters to child nodes
    this.indices = []; // Array to store the indices of suffixes
  }
}
class SuffixTree {
  constructor() {
    this.root = new Node(); // Initialize the root node
  }

  // Function to insert a suffix into the suffix tree
  insert(suffix, index) {
    let node = this.root;
    for (let i = 0; i < suffix.length; i++) {
      const char = suffix[i];
      if (!node.children[char]) {
        node.children[char] = new Node();
      }
      node = node.children[char]; // Move to the child node
      node.indices.push(index); // Add the suffix index to the node
    }
  }

  // Function to build the suffix tree from an input string
  build(str) {
    for (let i = 0; i < str.length; i++) {
      const suffix = str.slice(i);
      this.insert(suffix, i);
    }
  }

  // Function to search for a pattern in the suffix tree
  search(pattern) {
    let node = this.root;
    for (let i = 0; i < pattern.length; i++) {
      const char = pattern[i];
      if (node.children[char]) {
        node = node.children[char]; // Move to the child node
      } else {
        return []; // Pattern not found
      }
    }
    return node.indices; // Return the indices of matching suffixes
  }
}
// Create a new suffix tree
const suffixTree = new SuffixTree();

// Build the suffix tree from the input string
const inputString = "banana";
suffixTree.build(inputString);

// Search for a pattern in the suffix tree
const pattern = "na";
const matches = suffixTree.search(pattern);
console.log(`Matching suffixes for pattern "${pattern}":`, matches);
