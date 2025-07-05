// Define a TrieNode class
class TrieNode {
  // Map to hold child nodes
  children: Map<string, TrieNode>;
  // Flag to mark the end of a word
  isEndOfWord: boolean;

  constructor() {
    this.children = new Map<string, TrieNode>();
    this.isEndOfWord = false;
  }
}

// Define the Trie class
class Trie {
  private root: TrieNode;

  constructor() {
    this.root = new TrieNode();
  }

  // Method to insert a word into the trie
  insert(word: string): void {
    let currentNode = this.root;

    for (const char of word) {
      if (!currentNode.children.has(char)) {
        currentNode.children.set(char, new TrieNode());
      }
      currentNode = currentNode.children.get(char)!;
    }

    currentNode.isEndOfWord = true;
  }

  // Method to search for a full word
  search(word: string): boolean {
    let currentNode = this.root;

    for (const char of word) {
      if (!currentNode.children.has(char)) {
        return false;
      }
      currentNode = currentNode.children.get(char)!;
    }

    return currentNode.isEndOfWord;
  }

  // Method to check if any word in the trie starts with the given prefix
  startsWith(prefix: string): boolean {
    let currentNode = this.root;

    for (const char of prefix) {
      if (!currentNode.children.has(char)) {
        return false;
      }
      currentNode = currentNode.children.get(char)!;
    }

    return true;
  }
}

// Example usage:
const trie = new Trie();
trie.insert("apple");
trie.insert("app");
trie.insert("application");

console.log(trie.search("app")); // true
console.log(trie.search("appl")); // false
console.log(trie.startsWith("app")); // true
console.log(trie.startsWith("apply")); // false
