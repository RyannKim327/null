class SuffixTrieNode {
  constructor() {
    this.children = new Map();
  }

  addChild(char, node) {
    this.children.set(char, node);
  }

  getChild(char) {
    return this.children.get(char);
  }

  hasChild(char) {
    return this.children.has(char);
  }
}
class SuffixTree {
  constructor() {
    this.root = new SuffixTrieNode();
  }

  // Build the suffix tree from a given string
  buildTree(string) {
    for (let i = 0; i < string.length; i++) {
      this._insertSuffix(string.substring(i));
    }
  }

  _insertSuffix(suffix) {
    let currentNode = this.root;

    for (let i = 0; i < suffix.length; i++) {
      const char = suffix[i];
      if (!currentNode.hasChild(char)) {
        const newNode = new SuffixTrieNode();
        currentNode.addChild(char, newNode);
      }
      currentNode = currentNode.getChild(char);
    }
  }

  // Search for a substring in the suffix tree
  search(substring) {
    let currentNode = this.root;

    for (let i = 0; i < substring.length; i++) {
      const char = substring[i];
      if (currentNode.hasChild(char)) {
        currentNode = currentNode.getChild(char);
      } else {
        return false;
      }
    }

    return true;
  }
}
const suffixTree = new SuffixTree();
suffixTree.buildTree('banana');

console.log(suffixTree.search('ana')); // Output: true
console.log(suffixTree.search('nan')); // Output: true
console.log(suffixTree.search('ban')); // Output: true
console.log(suffixTree.search('cat')); // Output: false
