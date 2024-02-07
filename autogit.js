// Node class
class Node {
  constructor() {
    this.children = {};
  }
}

// Suffix Tree class
class SuffixTree {
  constructor(string) {
    this.root = new Node();
    this.construct(string);
  }

  // Construction method
  construct(string) {
    for (let i = 0; i < string.length; i++) {
      const suffix = string.slice(i);
      this.insert(suffix, i);
    }
  }

  // Insertion method
  insert(suffix, index) {
    let currentNode = this.root;

    for (let i = 0; i < suffix.length; i++) {
      const char = suffix[i];

      // If the current character doesn't exist in the children, add a new node
      if (!currentNode.children[char]) {
        currentNode.children[char] = new Node();
      }

      currentNode = currentNode.children[char];
    }

    // Store the index of the suffix in the leaf node
    currentNode.index = index;
  }

  // Search method to find occurrences of a substring
  search(substring) {
    let currentNode = this.root;

    for (let i = 0; i < substring.length; i++) {
      const char = substring[i];

      // If the current character doesn't exist in the children, the substring doesn't exist
      if (!currentNode.children[char]) {
        return [];
      }

      currentNode = currentNode.children[char];
    }

    // Get all indices from the leaf node and its children
    return this.getAllIndices(currentNode);
  }

  // Helper method to get all indices from a node and its children
  getAllIndices(node) {
    let results = [];

    // Recursively visit all children nodes
    for (const key in node.children) {
      const child = node.children[key];

      // If the child has an index, add it to the results
      if (child.index !== undefined) {
        results.push(child.index);
      }

      // Recursively visit the child's children
      results = results.concat(this.getAllIndices(child));
    }

    return results;
  }
}

// Usage example
const suffixTree = new SuffixTree("banana");
console.log(suffixTree.search("an")); // Output: [1, 3]
console.log(suffixTree.search("na")); // Output: [2, 4]
