class SuffixTreeNode {
  children: Map<string, SuffixTreeNode>;
  // Optional: index to store position of suffix, useful in leaf nodes
  index?: number;

  constructor() {
    this.children = new Map();
  }
}

class SuffixTree {
  root: SuffixTreeNode;
  text: string;

  constructor(text: string) {
    this.root = new SuffixTreeNode();
    this.text = text;
    this.build();
  }

  private build() {
    for (let i = 0; i < this.text.length; i++) {
      this.insertSuffix(i);
    }
  }

  private insertSuffix(start: number) {
    let currentNode = this.root;

    // Insert substring text[start..end]
    for (let j = start; j < this.text.length; j++) {
      const char = this.text[j];
      if (!currentNode.children.has(char)) {
        currentNode.children.set(char, new SuffixTreeNode());
      }
      currentNode = currentNode.children.get(char)!;
    }

    // Mark leaf node by storing suffix start index
    currentNode.index = start;
  }

  search(pattern: string): boolean {
    let currentNode = this.root;

    for (const char of pattern) {
      if (!currentNode.children.has(char)) return false;
      currentNode = currentNode.children.get(char)!;
    }

    return true;
  }
}

// Usage
const st = new SuffixTree("banana");
console.log(st.search("ana"));  // true
console.log(st.search("nab"));  // false
