class Node {
  constructor() {
    this.children = {};
    this.suffixLink = null;
  }
}
class SuffixTree {
  constructor() {
    this.root = new Node();
  }
}
SuffixTree.prototype.insert = function(string) {
  const len = string.length;
  for (let i = 0; i < len; i++) {
    let node = this.root;
    let suffix = string.substring(i);
    for (let j = 0; j < suffix.length; j++) {
      const char = suffix[j];
      if (!(char in node.children)) {
        node.children[char] = new Node();
      }
      node = node.children[char];
    }
    // Store the remaining suffix as the value of the leaf node
    node.value = suffix;
  }
};
SuffixTree.prototype.buildSuffixTree = function(string) {
  for (let i = 0; i < string.length; i++) {
    this.insert(string.substring(i));
  }
};
const suffixTree = new SuffixTree();
const inputString = "banana";
suffixTree.buildSuffixTree(inputString);
console.log(suffixTree.root);
