class SuffixTreeNode {
  edges: Map<string, SuffixTreeNode>;
  // If you want compressed edges, you can store label on edges or here, but let's keep simple:
  indices: number[]; // indices of suffixes that reach this node (optional, helps searching)

  constructor() {
    this.edges = new Map();
    this.indices = [];
  }
}

class SuffixTree {
  root: SuffixTreeNode;
  text: string;

  constructor(text: string) {
    this.text = text;
    this.root = new SuffixTreeNode();
    this.build();
  }

  build() {
    for (let i = 0; i < this.text.length; i++) {
      this.insertSuffix(i);
    }
  }

  insertSuffix(startIndex: number) {
    let currentNode = this.root;
    for (let i = startIndex; i < this.text.length; i++) {
      const char = this.text[i];
      if (!currentNode.edges.has(char)) {
        currentNode.edges.set(char, new SuffixTreeNode());
      }
      currentNode = currentNode.edges.get(char)!;
      currentNode.indices.push(startIndex);
    }
  }

  // Search if a pattern exists in the text using the suffix tree
  search(pattern: string): boolean {
    let currentNode = this.root;
    for (const char of pattern) {
      if (!currentNode.edges.has(char)) return false;
      currentNode = currentNode.edges.get(char)!;
    }
    return true;
  }

  // Optional: get all starting indices where pattern occurs
  getSuffixIndices(pattern: string): number[] {
    let currentNode = this.root;
    for (const char of pattern) {
      if (!currentNode.edges.has(char)) return [];
      currentNode = currentNode.edges.get(char)!;
    }
    return currentNode.indices;
  }
}

// Usage example:
const text = "banana";
const suffixTree = new SuffixTree(text);

console.log(suffixTree.search("ana")); // true
console.log(suffixTree.search("nana")); // true
console.log(suffixTree.search("bananas")); // false
console.log(suffixTree.getSuffixIndices("ana")); // [1, 3]
