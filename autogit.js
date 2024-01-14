class TrieNode {
  constructor() {
    this.children = new Map();
    this.isEndOfWord = false;
  }
}
class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  // Insert a word into the Trie
  insert(word) {
    let current = this.root;
    for (let i = 0; i < word.length; i++) {
      const char = word[i];
      if (!current.children.has(char)) {
        current.children.set(char, new TrieNode());
      }
      current = current.children.get(char);
    }
    current.isEndOfWord = true;
  }

  // Search for a word in the Trie
  search(word) {
    let current = this.root;
    for (let i = 0; i < word.length; i++) {
      const char = word[i];
      if (!current.children.has(char)) {
        return false;
      }
      current = current.children.get(char);
    }
    return current.isEndOfWord;
  }

  // Check if a word has any prefix in the Trie
  startsWith(prefix) {
    let current = this.root;
    for (let i = 0; i < prefix.length; i++) {
      const char = prefix[i];
      if (!current.children.has(char)) {
        return false;
      }
      current = current.children.get(char);
    }
    return true;
  }
}
const trie = new Trie();

// Insert words into the Trie
trie.insert("apple");
trie.insert("app");
trie.insert("application");

// Search for words in the Trie
console.log(trie.search("apple")); // Output: true
console.log(trie.search("app")); // Output: true
console.log(trie.search("application")); // Output: true
console.log(trie.search("banana")); // Output: false

// Check if a word has any prefix in the Trie
console.log(trie.startsWith("app")); // Output: true
console.log(trie.startsWith("ban")); // Output: false
