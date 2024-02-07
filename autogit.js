class Node {
  constructor(label) {
    this.label = label;
    this.children = {};
    this.isLeaf = false;
  }
}
class SuffixTree {
  constructor() {
    this.root = new Node('');
  }
}
class SuffixTree {
  // previous code...

  build(input) {
    for (let i = 0; i < input.length; i++) {
      this._addSuffix(input.substring(i));
    }
  }

  _addSuffix(suffix) {
    let currentNode = this.root;
    for (let i = 0; i < suffix.length; i++) {
      const char = suffix[i];
      if (!currentNode.children[char]) {
        currentNode.children[char] = new Node(suffix.substring(i));
      }
      currentNode = currentNode.children[char];
    }
    currentNode.isLeaf = true;
  }
}
class SuffixTree {
  // previous code...

  search(query) {
    let currentNode = this.root;
    let i = 0;
    while (i < query.length) {
      const char = query[i];
      if (!currentNode.children[char]) {
        return false;
      }
      const label = currentNode.children[char].label;
      const len = Math.min(query.length - i, label.length);
      if (query.substring(i, i + len) !== label.substring(0, len)) {
        return false;
      }
      i += len;
      if (i === query.length && currentNode.children[char].isLeaf) {
        return true;
      }
      currentNode = currentNode.children[char];
    }
    return false;
  }
}
