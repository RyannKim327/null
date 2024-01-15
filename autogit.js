class Node {
  constructor() {
    this.children = {};
  }
}

class SuffixTree {
  constructor(text) {
    this.root = new Node();
    this.construct(text);
  }

  construct(text) {
    for (let i = 0; i < text.length; i++) {
      this.insertSuffix(text.slice(i));
    }
  }

  insertSuffix(suffix) {
    let node = this.root;
    for (let i = 0; i < suffix.length; i++) {
      const char = suffix[i];
      if (!node.children[char]) {
        node.children[char] = new Node();
      }
      node = node.children[char];
    }
  }

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
const suffixTree = new SuffixTree(text);

console.log(suffixTree.search("ana")); // Output: true
console.log(suffixTree.search("nan")); // Output: true
console.log(suffixTree.search("xxx")); // Output: false
