class Node {
  constructor() {
    this.children = {};  // Map of character => Node
    this.indexes = [];   // Array of indices where the suffix starts
  }
}
class SuffixTree {
  constructor() {
    this.root = new Node();
  }

  // Function to insert a suffix into the suffix tree
  insertSuffix(suffix, index) {
    let node = this.root;
    for (let i = 0; i < suffix.length; i++) {
      const char = suffix[i];
      if (!node.children[char]) {
        node.children[char] = new Node();
      }
      node = node.children[char];
      node.indexes.push(index);
    }
  }

  // Function to build the suffix tree
  buildSuffixTree(text) {
    for (let i = 0; i < text.length; i++) {
      const suffix = text.substring(i);
      this.insertSuffix(suffix, i);
    }
  }

  // Function to search for a pattern in the suffix tree
  search(pattern) {
    let node = this.root;
    for (let i = 0; i < pattern.length; i++) {
      const char = pattern[i];
      if (!node.children[char]) {
        return false;
      }
      node = node.children[char];
    }
    return true;
  }
}
const text = "banana";
const pattern = "na";

const suffixTree = new SuffixTree();
suffixTree.buildSuffixTree(text);

console.log(`Search result for "${pattern}":`, suffixTree.search(pattern));
