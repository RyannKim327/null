// Suffix Tree Node
class Node {
  constructor() {
    this.children = {};
  }
}

// Suffix Tree
class SuffixTree {
  constructor(str) {
    this.root = new Node();
    this.buildSuffixTree(str);
  }

  // Build the suffix tree
  buildSuffixTree(str) {
    for (let i = 0; i < str.length; i++) {
      const suffix = str.slice(i);
      this.insertSuffix(suffix, i);
    }
  }

  // Insert a suffix into the suffix tree
  insertSuffix(suffix, index) {
    let currentNode = this.root;
    for (let i = 0; i < suffix.length; i++) {
      const char = suffix[i];
      if (!currentNode.children[char]) {
        currentNode.children[char] = new Node();
      }
      currentNode = currentNode.children[char];
    }
    // Store the index of the suffix endpoint
    currentNode.endpoint = index;
  }

  // Search for a pattern in the suffix tree
  search(pattern) {
    let currentNode = this.root;
    for (let i = 0; i < pattern.length; i++) {
      const char = pattern[i];
      if (!currentNode.children[char]) {
        return false; // Pattern not found
      }
      currentNode = currentNode.children[char];
    }
    return true; // Pattern found
  }
}

// Usage example
const suffixTree = new SuffixTree("banana");
console.log(suffixTree.search("ana")); // true
console.log(suffixTree.search("xyz")); // false
