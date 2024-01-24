class Node {
  constructor() {
    this.children = {};
    // additional properties if needed
  }
}
class SuffixTree {
  constructor() {
    this.root = new Node();
    // additional properties if needed
  }

  // additional methods if needed
}
SuffixTree.prototype.addSuffix = function(suffix, index) {
  let node = this.root;
  for (let i = 0; i < suffix.length; i++) {
    const char = suffix[i];
    if (!node.children[char]) {
      node.children[char] = new Node();
    }
    node = node.children[char];
  }
  
  // Store additional information if needed (e.g., suffix index)
};

SuffixTree.prototype.build = function(str) {
  for (let i = 0; i < str.length; i++) {
    this.addSuffix(str.slice(i), i);
  }
};
const suffixTree = new SuffixTree();
const inputString = "banana";
suffixTree.build(inputString);
console.log(suffixTree); // Print the constructed tree for testing
