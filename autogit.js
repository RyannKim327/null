class Node {
  constructor(start, end) {
    this.start = start;
    this.end = end;
    this.children = {};
    this.suffixLink = null;
  }
}
class SuffixTree {
  constructor() {
    this.root = new Node(-1, -1); // Root node
    this.lastNewNode = null;
    this.activeNode = this.root;
    this.activeEdge = -1;
    this.activeLength = 0;
    this.remainingSuffixCount = 0;
    this.end = -1;
    this.length = 0;
    this.string = ''; // Original string
  }

  // Function for inserting a string into the tree
  insertString(string) {
    this.string = string;
    this.length = string.length;
    for (let i = 0; i < this.length; i++) {
      this.extendSuffixTree(i);
    }
  }

  // Function for extending the suffix tree based on the current index
  extendSuffixTree(pos) {
    this.end = pos;
    this.remainingSuffixCount++;
    this.lastNewNode = null;

    while (this.remainingSuffixCount > 0) {

      if (this.activeLength === 0) {
        this.activeEdge = pos;
      }

      if (!this.activeNode.children[this.string.charAt(this.activeEdge)]) {
        this.activeNode.children[this.string.charAt(this.activeEdge)] = new Node(pos, this.length);
        
        if (this.lastNewNode !== null) {
          this.lastNewNode.suffixLink = this.activeNode;
          this.lastNewNode = null;
        }
      } else {
        const nextNode = this.activeNode.children[this.string.charAt(this.activeEdge)];
        if (this.doTraversal(nextNode)) {
          continue;
        }
        if (this.string.charAt(nextNode.start + this.activeLength) === this.string.charAt(pos)) {
          if (this.lastNewNode !== null && this.activeNode !== this.root) {
            this.lastNewNode.suffixLink = this.activeNode;
            this.lastNewNode = null;
          }
          this.activeLength++;
          break;
        }

        const newNode = new Node(nextNode.start, nextNode.start + this.activeLength - 1);
        const splitNode = new Node(pos, this.length);
        this.activeNode.children[this.string.charAt(this.activeEdge)] = newNode;
        newNode.children[this.string.charAt(pos)] = splitNode;
        nextNode.start += this.activeLength;

        newNode.children[this.string.charAt(nextNode.start)] = nextNode;

        if (this.lastNewNode !== null) {
          this.lastNewNode.suffixLink = newNode;
        }
        this.lastNewNode = newNode;
      }

      this.remainingSuffixCount--;
      if (this.activeNode === this.root && this.activeLength > 0) {
        this.activeLength--;
        this.activeEdge = pos - this.remainingSuffixCount + 1;
      } else if (this.activeNode !== this.root) {
        this.activeNode = this.activeNode.suffixLink;
      }
    }
  }

  doTraversal(currentNode) {
    const edgeLength = currentNode.end - currentNode.start + 1;

    if (this.activeLength >= edgeLength) {
      this.activeEdge += edgeLength;
      this.activeLength -= edgeLength;
      this.activeNode = currentNode;
      return true;
    }
    return false;
  }
}
const suffixTree = new SuffixTree();
suffixTree.insertString("your_string_here");
