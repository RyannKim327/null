class Node {
  constructor() {
    this.children = {};
  }
}

class SuffixTree {
  constructor(input) {
    this.root = new Node();
    this.input = input;
    this.activeNode = this.root;
    this.activeEdge = 0;
    this.activeLength = 0;
    this.remaining = 0;
    this.end = 0;
    this.splitEnd = 0;
    this.size = -1;

    this.buildSuffixTree();
  }

  buildSuffixTree() {
    for (let i = 0; i < this.input.length; i++) {
      this.extendSuffixTree(i);
    }
  }

  extendSuffixTree(pos) {
    this.size++;
    this.remaining++;
    let lastCreatedNode = null;

    while (this.remaining > 0) {
      if (this.activeLength === 0) {
        this.activeEdge = pos;
      }

      if (!this.activeNode.children[this.input[this.activeEdge]]) {
        this.activeNode.children[this.input[this.activeEdge]] = new Node();
        if (lastCreatedNode != null) {
          lastCreatedNode.suffixLink = this.activeNode;
          lastCreatedNode = null;
        }
      } else {
        let next = this.activeNode.children[this.input[this.activeEdge]];
        if (this.canonizeSuffix(pos, next)) continue;
      }

      this.end = pos;
      this.remaining--;

      if (this.activeNode === this.root && this.activeLength > 0) {
        this.activeLength--;
        this.activeEdge = pos - this.remaining + 1;
      } else {
        this.activeNode =
          this.activeNode.suffixLink || this.root;
      }
      this.canonizeSuffix(pos, this.activeNode);

    }
  }

  canonizeSuffix(pos, node) {
    if (this.activeLength >= node.children[this.input[this.activeEdge]].length) {
      this.activeEdge += node.children[this.input[this.activeEdge]].length;
      this.activeLength -= node.children[this.input[this.activeEdge]].length;
      this.activeNode = node;
      return true;
    }
    return false;
  }
}

// Example usage
const inputString = "banana";
const suffixTree = new SuffixTree(inputString);
console.log(suffixTree);

