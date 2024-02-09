class Node {
  constructor() {
    // Each node contains an object to store child nodes
    this.children = {};
  }
}
class SuffixTree {
  constructor() {
    // The root node of the suffix tree
    this.root = new Node();
  }

  // Function to insert a string into the suffix tree
  insertString(string) {
    for (let i = 0; i < string.length; i++) {
      this.insertSuffix(string.substring(i));
    }
  }

  // Function to insert a suffix into the suffix tree
  insertSuffix(suffix) {
    let currentNode = this.root;

    for (let i = 0; i < suffix.length; i++) {
      const char = suffix[i];

      // Check if the current character is already a child of the current node
      if (!(char in currentNode.children)) {
        // If not, create a new child node for the current character
        currentNode.children[char] = new Node();
      }

      // Move to the child node corresponding to the current character
      currentNode = currentNode.children[char];
    }
  }

  // Function to search for a pattern in the suffix tree
  searchPattern(pattern) {
    let currentNode = this.root;

    for (let i = 0; i < pattern.length; i++) {
      const char = pattern[i];

      // Check if the current character is a child of the current node
      if (char in currentNode.children) {
        // Move to the child node corresponding to the current character
        currentNode = currentNode.children[char];
      } else {
        // If the character is not found, the pattern is not present in the tree
        return false;
      }
    }

    // If the pattern is found, return true
    return true;
  }
}
// Create a new instance of the SuffixTree class
const suffixTree = new SuffixTree();

// Insert a string into the suffix tree
suffixTree.insertString("banana");

// Search for a pattern in the suffix tree
console.log(suffixTree.searchPattern("ana")); // Output: true
console.log(suffixTree.searchPattern("apple")); // Output: false
