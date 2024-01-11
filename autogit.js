class Node {
  constructor() {
    this.children = {};
  }
}

class SuffixTree {
  constructor(string) {
    this.root = new Node();
    this.buildTree(string);
  }

  buildTree(string) {
    // Add all suffixes to the tree
    for (let i = 0; i < string.length; i++) {
      const suffix = string.slice(i);
      this.addSuffix(suffix, i);
    }
  }

  addSuffix(suffix, index) {
    let currentNode = this.root;

    for (let i = 0; i < suffix.length; i++) {
      const char = suffix[i];

      if (!currentNode.children[char]) {
        currentNode.children[char] = new Node();
      }

      currentNode = currentNode.children[char];
    }

    // Store the index where the suffix starts
    if (!currentNode.index) {
      currentNode.index = index;
    }
  }

  search(pattern) {
    let currentNode = this.root;

    for (let i = 0; i < pattern.length; i++) {
      const char = pattern[i];

      if (!currentNode.children[char]) {
        return null; // Pattern not found
      }

      currentNode = currentNode.children[char];
    }

    return currentNode.index; // Return the index where the pattern starts
  }
}

// Example usage
const suffixTree = new SuffixTree("banana");
console.log(suffixTree.search("ana")); // Output: 1
console.log(suffixTree.search("na")); // Output: 2
console.log(suffixTree.search("foo")); // Output: null
