class Node {
  constructor(startIndex) {
    this.startIndex = startIndex;
    this.children = {};
    // Add other properties if needed
  }
}
class SuffixTree {
  constructor(text) {
    this.text = text;
    this.root = new Node(-1);
    this.construct();
  }

  construct() {
    const len = this.text.length;
    for (let i = 0; i < len; i++) {
      this._addSuffix(i);
    }
  }

  _addSuffix(startIndex) {
    let current = this.root;
    const suffix = this.text.slice(startIndex);
    const len = suffix.length;

    for (let i = 0; i < len; i++) {
      const char = suffix[i];
      if (!current.children[char]) {
        current.children[char] = new Node(startIndex + i);
      }
      current = current.children[char];
    }
  }

  // Add other methods for operations like searching, deleting, etc.
}
const suffixTree = new SuffixTree('banana');

// Testing by traversing the tree
console.log(suffixTree.root.children['a'].children); // Output: { n: Node { startIndex: 2, children: {} } }

console.log(suffixTree.root.children['b']); // Output: Node { startIndex: 0, children: { a: Node { startIndex: 1, children: [Object] } } }
