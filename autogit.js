class Node {
  constructor(start, end) {
    this.start = start;
    this.end = end;
    this.children = new Map();
    this.suffixLink = null;
  }
}
class SuffixTree {
  constructor(word) {
    this.root = new Node(-1, -1); // The root node with dummy values
    this.word = word;
    this.buildTree();
  }

  buildTree() {
    const len = this.word.length;
    for (let i = 0; i < len; i++) {
      this.addSuffix(i);
    }
  }

  addSuffix(start) {
    let current = this.root;
    const len = this.word.length;

    for (let i = start; i < len; i++) {
      const char = this.word[i];
      if (!current.children.has(char)) {
        const newNode = new Node(i, len - 1);
        current.children.set(char, newNode);
        return;
      }

      current = current.children.get(char);
      const end = current.end;

      // Check if suffix is already present
      const suffixLen = end - current.start + 1;
      if (i - start + 1 >= suffixLen) {
        start += suffixLen;
        continue;
      }

      // If suffix doesn't match, split the node
      if (this.word[i] !== this.word[start + i - current.start]) {
        const splitNode = new Node(current.start, start + i - 1);
        const newNode = new Node(start + i, len - 1);
        
        current.start = start - 1;
        current.end = current.start + suffixLen - 1;
        current.children.set(this.word[start + i], newNode);
        current.children.set(this.word[start], splitNode);
        
        return;
      }
    }
  }
}
const suffixTree = new SuffixTree('banana');
