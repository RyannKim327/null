class SuffixTreeNode {
  children: Map<string, SuffixTreeNode>;
  isEndOfSubstring: boolean;

  constructor() {
    this.children = new Map<string, SuffixTreeNode>();
    this.isEndOfSubstring = false;
  }
}
class SuffixTree {
  root: SuffixTreeNode;

  constructor() {
    this.root = new SuffixTreeNode();
  }

  // Function to insert suffixes into the suffix tree
  insertSuffixes(text: string) {
    const n = text.length;
    for (let i = 0; i < n; i++) {
      const suffix = text.substring(i);
      this.insert(suffix);
    }
  }

  // Helper function to insert a single suffix into the tree
  insert(suffix: string) {
    let node = this.root;
    for (const char of suffix) {
      if (!node.children.has(char)) {
        node.children.set(char, new SuffixTreeNode());
      }
      node = node.children.get(char)!;
    }
    node.isEndOfSubstring = true; // Mark the end of a valid substring
  }

  // Function to search for a substring in the suffix tree
  search(pattern: string): boolean {
    let node = this.root;
    for (const char of pattern) {
      if (!node.children.has(char)) {
        return false; // Character not found, pattern doesn't exist
      }
      node = node.children.get(char)!;
    }
    return true; // The pattern exists
  }
}
const suffixTree = new SuffixTree();
const text = "banana";
suffixTree.insertSuffixes(text);

console.log(suffixTree.search("nan")); // true
console.log(suffixTree.search("ana"));  // true
console.log(suffixTree.search("ba"));   // true
console.log(suffixTree.search("xyz"));  // false
