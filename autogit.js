class Node {
  constructor(start, end) {
    this.start = start;
    this.end = end;
    this.children = {};
  }
}
class SuffixTree {
  constructor() {
    this.root = new Node(-1, -1); // Dummy root node
  }

  buildTree(text) {
    for (let i = 0; i < text.length; i++) {
      this._insertSuffix(text.substring(i), i);
    }
  }

  _insertSuffix(suffix, index) {
    let node = this.root;
    for (let i = 0; i < suffix.length; i++) {
      const char = suffix[i];
      if (!node.children[char]) {
        node.children[char] = new Node(index + i, -1);
      }
      node = node.children[char];
    }
    node.end = index;
  }
}
const suffixTree = new SuffixTree();
const text = "banana";
suffixTree.buildTree(text);

console.log(suffixTree.root.children); // Outputs the tree structure
