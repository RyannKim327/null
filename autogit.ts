class TrieNode {
  children: Map<string, TrieNode>;
  isEndOfWord: boolean;

  constructor() {
    this.children = new Map();
    this.isEndOfWord = false;
  }
}

class Trie {
  private root: TrieNode;

  constructor() {
    this.root = new TrieNode();
  }

  // Inserts a word into the trie.
  insert(word: string): void {
    let node = this.root;
    for (const char of word) {
      if (!node.children.has(char)) {
        node.children.set(char, new TrieNode());
      }
      node = node.children.get(char)!;
    }
    node.isEndOfWord = true;
  }

  // Searches for a word in the trie.
  search(word: string): boolean {
    const node = this.findNode(word);
    return node !== null && node.isEndOfWord;
  }

  // Returns true if there is a word in the trie that starts with the given prefix.
  startsWith(prefix: string): boolean {
    return this.findNode(prefix) !== null;
  }

  // Helper function to find the end node of a given word/prefix.
  private findNode(word: string): TrieNode | null {
    let node = this.root;
    for (const char of word) {
      if (!node.children.has(char)) {
        return null; // If the character is not found, return null
      }
      node = node.children.get(char)!;
    }
    return node; // Return the last node (could be end of a word or prefix)
  }
}

// Example usage:
const trie = new Trie();

trie.insert("hello");
trie.insert("helium");
trie.insert("hey");

console.log(trie.search("hello")); // true
console.log(trie.search("hel")); // false
console.log(trie.startsWith("he")); // true
console.log(trie.startsWith("hi")); // false
