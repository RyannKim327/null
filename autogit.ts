class SuffixTreeNode {
  children: Map<string, SuffixTreeNode>;
  indices: number[]; // stores start indices of suffixes passing through this node

  constructor() {
    this.children = new Map();
    this.indices = [];
  }
}

class SuffixTree {
  root: SuffixTreeNode;
  text: string;

  constructor(text: string) {
    this.text = text;
    this.root = new SuffixTreeNode();
    this.buildNaive();
  }

  private buildNaive() {
    for (let i = 0; i < this.text.length; i++) {
      this.insertSuffix(i);
    }
  }

  private insertSuffix(startIndex: number) {
    let node = this.root;
    node.indices.push(startIndex);

    for (let i = startIndex; i < this.text.length; i++) {
      const ch = this.text[i];
      if (!node.children.has(ch)) {
        node.children.set(ch, new SuffixTreeNode());
      }
      node = node.children.get(ch)!;
      node.indices.push(startIndex);
    }
  }

  // Search for a pattern in the text using the suffix tree
  search(pattern: string): number[] {
    let node = this.root;
    for (const ch of pattern) {
      if (!node.children.has(ch)) {
        return []; // pattern not found
      }
      node = node.children.get(ch)!;
    }
    return node.indices; // starting indices where the pattern occurs
  }
}
const text = "banana";
const suffixTree = new SuffixTree(text);

console.log(suffixTree.search("ana")); // Output: [1, 3]
console.log(suffixTree.search("nana")); // Output: [2]
console.log(suffixTree.search("apple")); // Output: []
