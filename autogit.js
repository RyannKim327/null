class Node {
  constructor(startIndex, endIndex) {
    this.edges = {};
    this.startIndex = startIndex;
    this.endIndex = endIndex;
  }
}
class SuffixTree {
  constructor() {
    this.root = new Node(-1, -1);
    this.activeNode = this.root;
    this.activeEdge = '';
    this.activeLength = 0;
    this.remainingSuffixes = 0;
    this.lastNewNode = null;
    this.endIndex = -1;
    this.root.link = this.root;
  }

  addSuffix(suffix) {
    this.endIndex++;

    this.lastNewNode = null;
    this.remainingSuffixes++;

    while (this.remainingSuffixes > 0) {
      if (this.activeLength === 0) {
        this.activeEdge = suffix[this.endIndex];
      }

      if (!(this.activeEdge in this.activeNode.edges)) {
        const leafNode = new Node(this.endIndex, Infinity);
        this.activeNode.edges[this.activeEdge] = leafNode;

        if (this.lastNewNode !== null) {
          this.lastNewNode.link = this.activeNode;
          this.lastNewNode = null;
        }
      } else {
        const nextNode = this.activeNode.edges[this.activeEdge];
        if (this.walkDown(suffix, nextNode)) {
          continue;
        }

        if (suffix[nextNode.startIndex + this.activeLength] === suffix[this.endIndex]) {
          if (this.lastNewNode !== null && this.activeNode !== this.root) {
            this.lastNewNode.link = this.activeNode;
            this.lastNewNode = null;
          }

          this.activeLength++;
          break;
        }

        const splitEnd = nextNode.startIndex + this.activeLength - 1;
        const splitNode = new Node(nextNode.startIndex, splitEnd);
        this.activeNode.edges[this.activeEdge] = splitNode;

        const leafNode = new Node(this.endIndex, Infinity);
        splitNode.edges[suffix[this.endIndex]] = leafNode;

        nextNode.startIndex += this.activeLength;
        splitNode.edges[suffix[nextNode.startIndex]] = nextNode;

        if (this.lastNewNode !== null) {
          this.lastNewNode.link = splitNode;
        }

        this.lastNewNode = splitNode;
      }

      this.remainingSuffixes--;
      if (this.activeNode === this.root && this.activeLength > 0) {
        this.activeLength--;
        this.activeEdge = suffix[this.endIndex - this.remainingSuffixes + 1];
      } else if (this.activeNode !== this.root) {
        this.activeNode = this.activeNode.link;
      }
    }
  }

  walkDown(suffix, node) {
    if (this.activeLength >= this.edgeLength(node)) {
      this.activeEdge = suffix[this.endIndex - this.remainingSuffixes + this.activeLength];
      this.activeLength -= this.edgeLength(node);
      this.activeNode = node;
      return true;
    }
    return false;
  }

  edgeLength(node) {
    return Math.min(node.endIndex, this.endIndex) - node.startIndex + 1;
  }
}
const suffixTree = new SuffixTree();
const string = "banana";

for (let i = 0; i < string.length; i++) {
  suffixTree.addSuffix(string.substring(i));
}

console.log(suffixTree.root); // The root of the suffix tree
