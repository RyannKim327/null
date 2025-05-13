class SuffixTreeNode {
  children: Map<string, SuffixTreeNode>;
  indexes: number[];

  constructor() {
    this.children = new Map();
    this.indexes = [];
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

  // Insert each suffix into the tree
  private build() {
    for (let i = 0; i < this.text.length; i++) {
      this.insertSuffix(i);
    }
  }

  private insertSuffix(start: number) {
    let currentNode = this.root;
    for (let j = start; j < this.text.length; j++) {
      const currentChar = this.text[j];
      if (!currentNode.children.has(currentChar)) {
        currentNode.children.set(currentChar, new SuffixTreeNode());
      }
      currentNode = currentNode.children.get(currentChar)!;
      currentNode.indexes.push(start);
    }
  }

  // Check if a pattern exists in the string
  public search(pattern: string): boolean {
    let currentNode = this.root;
    for (const char of pattern) {
      if (!currentNode.children.has(char)) {
        return false;
      }
      currentNode = currentNode.children.get(char)!;
    }
    return true;
  }

  // Optional: get all starting indices of the pattern occurrences
  public getOccurrences(pattern: string): number[] | null {
    let currentNode = this.root;
    for (const char of pattern) {
      if (!currentNode.children.has(char)) {
        return null;
      }
      currentNode = currentNode.children.get(char)!;
    }
    // All suffixes indexed here contain the pattern at position stored in currentNode.indexes
    return currentNode.indexes;
  }
}
const text = "banana";
const suffixTree = new SuffixTree(text);

console.log(suffixTree.search("ana")); // true
console.log(suffixTree.search("apple")); // false
console.log(suffixTree.getOccurrences("ana")); // [1, 3]
