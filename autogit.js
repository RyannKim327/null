class Node {
  constructor() {
    this.edges = {};
    this.suffixLink = null;
  }
}

class SuffixTree {
  constructor(input) {
    this.input = input;
    this.root = new Node();
    this.activeNode = this.root;
    this.activeEdge = '';
    this.activeLength = 0;
    this.remainingSuffixCount = 0;
    this.end = { value: -1 };
  }

  extendSuffixTree(pos) {
    this.remainingSuffixCount++;

    this.lastNewNode = null;

    while (this.remainingSuffixCount > 0) {
      if (this.activeLength === 0) this.activeEdge = this.input[pos];

      if (!(this.activeEdge in this.activeNode.edges)) {
        const newNode = new Node();
        this.activeNode.edges[this.activeEdge] = newNode;

        if (this.lastNewNode) {
          this.lastNewNode.suffixLink = this.activeNode;
          this.lastNewNode = null;
        }
      } else {
        const nextNode = this.activeNode.edges[this.activeEdge];
        if (this.walkDown(nextNode, pos)) continue;

        if (this.input[nextNode.start + this.activeLength] === this.input[pos]) {
          if (this.lastNewNode && this.activeNode !== this.root) {
            this.lastNewNode.suffixLink = this.activeNode;
            this.lastNewNode = null;
          }

          this.activeLength++;
          break;
        }

        const splitEnd = nextNode.start + this.activeLength - 1;

        const splitNode = new Node();
        nextNode.start += this.activeLength;
        splitNode.start = nextNode.start;
        splitNode.end = splitEnd;
        nextNode.start = splitEnd + 1;
        splitNode.edges[this.input[pos]] = new Node();
        splitNode.edges[this.input[splitNode.start]] = nextNode;
        this.activeNode.edges[this.input[splitNode.start]] = splitNode;

        if (this.lastNewNode) {
          this.lastNewNode.suffixLink = splitNode;
        }

        this.lastNewNode = splitNode;
      }

      this.remainingSuffixCount--;
      if (this.activeNode === this.root && this.activeLength > 0) {
        this.activeLength--;
        this.activeEdge = this.input[pos - this.remainingSuffixCount + 1];
      } else if (this.activeNode !== this.root) {
        this.activeNode = this.activeNode.suffixLink;
      }
    }
  }

  walkDown(node, pos) {
    if (this.activeLength >= node.end - node.start + 1) {
      this.activeEdge = this.input[pos - (node.end - node.start + 1) + 1];
      this.activeLength -= node.end - node.start + 1;
      this.activeNode = node;
      return true;
    }
    return false;
  }

  buildSuffixTree() {
    const len = this.input.length;

    for (let i = 0; i < len; i++) {
      this.extendSuffixTree(i);
    }
  }

  search(pattern) {
    const len = pattern.length;
    let currentNode = this.root;
    let currentLen = 0;
    let i = 0;

    while (i < len) {
      if (currentNode.edges[pattern[i]]) {
        const edge = currentNode.edges[pattern[i]];
        const edgeLen = edge.end - edge.start + 1;
        const j = edge.start;

        while (currentLen < len && i < len && pattern[i] === this.input[j]) {
          i++;
          currentLen++;
          j++;

          if (currentLen === edgeLen)
            currentNode = edge;
        }
      } else {
        return false;
      }
    }

    return true;
  }
}

// Example usage:
const suffixTree = new SuffixTree('banana');
suffixTree.buildSuffixTree();

console.log(suffixTree.search('ana')); // Output: true
console.log(suffixTree.search('apple')); // Output: false
