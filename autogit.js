class Node {
  constructor(start, end) {
    this.start = start;
    this.end = end;
    this.children = {};
    this.link = null;
  }
}
class SuffixTree {
  constructor(text) {
    this.text = text;
    this.root = new Node(-1, -1);
    this.activeNode = this.root;
    this.activeEdge = null;
    this.activeLength = 0;
    this.remainingSuffixCount = 0;
    this.lastNewNode = null;
    this.activeEdgeIndex = -1;

    this.buildSuffixTree();
  }

  // Other methods...
}
  buildSuffixTree() {
    const n = this.text.length;
    for (let i = 0; i < n; i++) {
      this.extendSuffixTree(i);
    }
  }
  extendSuffixTree(pos) {
    this.remainingSuffixCount++;
    this.lastNewNode = null;

    while (this.remainingSuffixCount > 0) {
      if (this.activeLength === 0) {
        this.activeEdgeIndex = pos;
      }

      if (!this.activeNode.children[this.text[this.activeEdgeIndex]]) {
        this.activeNode.children[this.text[this.activeEdgeIndex]] = new Node(
          pos,
          n
        );

        if (this.lastNewNode !== null) {
          this.lastNewNode.link = this.activeNode;
          this.lastNewNode = null;
        }
      } else {
        const next = this.activeNode.children[this.text[this.activeEdgeIndex]];
        if (this.walkDown(next)) {
          continue;
        }

        if (this.text[next.start + this.activeLength] === this.text[pos]) {
          if (this.lastNewNode !== null && this.activeNode !== this.root) {
            this.lastNewNode.link = this.activeNode;
            this.lastNewNode = null;
          }

          this.activeLength++;
          break;
        }

        const splitEnd =
          next.start + this.activeLength - 1;
        const splitNode = new Node(next.start, splitEnd);
        this.activeNode.children[this.text[this.activeEdgeIndex]] = splitNode;

        splitNode.children[this.text[pos]] = new Node(pos, n);
        next.start += this.activeLength;
        splitNode.children[this.text[next.start]] = next;

        if (this.lastNewNode !== null) {
          this.lastNewNode.link = splitNode;
        }

        this.lastNewNode = splitNode;
      }

      this.remainingSuffixCount--;
      if (this.activeNode === this.root && this.activeLength > 0) {
        this.activeLength--;
        this.activeEdgeIndex = pos - this.remainingSuffixCount + 1;
      } else if (this.activeNode !== this.root) {
        this.activeNode = this.activeNode.link;
      }
    }
  }
  walkDown(node) {
    const edgeLength = node.end - node.start + 1;
    if (this.activeLength >= edgeLength) {
      this.activeEdgeIndex += edgeLength;
      this.activeLength -= edgeLength;
      this.activeNode = node;
      return true;
    }
    return false;
  }
