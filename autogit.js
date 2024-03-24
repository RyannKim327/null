// Node object
class Node {
  constructor() {
    this.children = {};
  }
}

// Suffix Tree class
class SuffixTree {
  constructor(str) {
    this.root = new Node();
    
    for (let i = 0; i < str.length; i++) {
      this.addSuffix(str.slice(i));
    }
  }
  
  addSuffix(suffix) {
    let node = this.root;
    for (let i = 0; i < suffix.length; i++) {
      const char = suffix[i];
      if (!(char in node.children)) {
        node.children[char] = new Node();
      }
      node = node.children[char];
    }
  }
  
  search(pattern) {
    let node = this.root;
    for (let i = 0; i < pattern.length; i++) {
      const char = pattern[i];
      if (!(char in node.children)) {
        return false;
      }
      node = node.children[char];
    }
    return true;
  }
}

// Example usage
const suffixTree = new SuffixTree("banana");
console.log(suffixTree.search("na")); // Output: true
console.log(suffixTree.search("an")); // Output: true
console.log(suffixTree.search("c")); // Output: false
