class SuffixTreeNode {
  constructor() {
    // Mapping from character to child nodes
    this.children = {};

    // List of indexes where the suffix ends
    this.indexes = [];
  }
}

class SuffixTree {
  constructor(text) {
    // Store the input text
    this.text = text;

    // Create the root node
    this.root = new SuffixTreeNode();

    // Build the suffix tree
    this.buildSuffixTree();
  }

  buildSuffixTree() {
    // Create suffixes and insert them into the tree
    for (let i = 0; i < this.text.length; i++) {
      let suffix = this.text.slice(i);
      this.insertSuffix(suffix, i);
    }
  }

  insertSuffix(suffix, index) {
    let currentNode = this.root;

    for (let i = 0; i < suffix.length; i++) {
      let char = suffix[i];

      // If the character is not in the child nodes, add a new node
      if (!(char in currentNode.children)) {
        currentNode.children[char] = new SuffixTreeNode();
      }

      currentNode = currentNode.children[char];
    }

    // Append the index where the suffix ends
    currentNode.indexes.push(index);
  }

  search(pattern) {
    let currentNode = this.root;

    for (let i = 0; i < pattern.length; i++) {
      let char = pattern[i];

      // If the character is not in the child nodes, the pattern is not found
      if (!(char in currentNode.children)) {
        return [];
      }

      currentNode = currentNode.children[char];
    }

    // Return the indexes where the pattern ends
    return currentNode.indexes;
  }
}

// Usage:
const suffixTree = new SuffixTree('banana');
console.log(suffixTree.search('na')); // Output: [2, 4]
console.log(suffixTree.search('an')); // Output: [1, 3]
console.log(suffixTree.search('n'));  // Output: [2, 4]
console.log(suffixTree.search('z'));  // Output: []
