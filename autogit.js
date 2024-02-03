class Node {
  constructor() {
    this.children = {};
    this.suffixes = [];
  }
}
class SuffixTree {
  constructor() {
    this.root = new Node();
  }

  // Method to add a suffix to the suffix tree
  addSuffix(suffix) {
    let current = this.root;

    for (let i = 0; i < suffix.length; i++) {
      const char = suffix[i];

      if (!current.children[char]) {
        current.children[char] = new Node();
      }

      current = current.children[char];
      current.suffixes.push(suffix);
    }
  }

  // Method to build the suffix tree from a string
  buildSuffixTree(string) {
    for (let i = 0; i < string.length; i++) {
      const suffix = string.slice(i);
      this.addSuffix(suffix);
    }
  }

  // Method to search for a pattern in the suffix tree
  searchPattern(pattern) {
    let current = this.root;

    for (let i = 0; i < pattern.length; i++) {
      const char = pattern[i];

      if (!current.children[char]) {
        return [];
      }

      current = current.children[char];
    }

    return current.suffixes; // Returns the matching suffixes
  }
}
// Usage example
const suffixTree = new SuffixTree();
suffixTree.buildSuffixTree("banana");

console.log(suffixTree.searchPattern("ana")); // Output: ['ana']
console.log(suffixTree.searchPattern("na")); // Output: ['na', 'nana']
console.log(suffixTree.searchPattern("apple")); // Output: []
