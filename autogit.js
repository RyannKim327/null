// TrieNode class
class TrieNode {
  constructor() {
    this.children = new Map();
    this.isEndOfWord = false;
  }
}

// Trie class
class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  // Insert a word into the trie
  insert(word) {
    let currentNode = this.root;

    for (let i = 0; i < word.length; i++) {
      const char = word[i];

      if (!currentNode.children.has(char)) {
        const newNode = new TrieNode();
        currentNode.children.set(char, newNode);
      }

      currentNode = currentNode.children.get(char);
    }

    currentNode.isEndOfWord = true;
  }

  // Search for a word in the trie
  search(word) {
    let currentNode = this.root;

    for (let i = 0; i < word.length; i++) {
      const char = word[i];

      if (!currentNode.children.has(char)) {
        return false;
      }

      currentNode = currentNode.children.get(char);
    }

    return currentNode.isEndOfWord;
  }

  // Check if a prefix exists in the trie
  startsWith(prefix) {
    let currentNode = this.root;

    for (let i = 0; i < prefix.length; i++) {
      const char = prefix[i];

      if (!currentNode.children.has(char)) {
        return false;
      }

      currentNode = currentNode.children.get(char);
    }

    return true;
  }
}

// Usage example
const trie = new Trie();

trie.insert("apple");
trie.insert("banana");

console.log(trie.search("apple")); // Output: true
console.log(trie.search("banana")); // Output: true
console.log(trie.search("cherry")); // Output: false

console.log(trie.startsWith("app")); // Output: true
console.log(trie.startsWith("ban")); // Output: true
console.log(trie.startsWith("che")); // Output: false
