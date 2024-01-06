class TrieNode {
  constructor() {
    this.children = new Map(); // Map of character to TrieNode
    this.isEndOfWord = false;
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  // Insert a word into the trie
  insert(word) {
    let currentNode = this.root;
    
    for (let i = 0; i < word.length; i++) {
      const char = word[i];
      
      // Check if the current char exists as a child node
      if (!currentNode.children.has(char)) {
        currentNode.children.set(char, new TrieNode());
      }

      currentNode = currentNode.children.get(char);
    }
    
    // Mark the end of the word
    currentNode.isEndOfWord = true;
  }

  // Search for a word in the trie
  search(word) {
    let currentNode = this.root;

    for (let i = 0; i < word.length; i++) {
      const char = word[i];

      if (!currentNode.children.has(char)) {
        return false; // Word not found
      }

      currentNode = currentNode.children.get(char);
    }

    return currentNode.isEndOfWord;
  }

  // Check if a word prefix exists in the trie
  startsWith(prefix) {
    let currentNode = this.root;

    for (let i = 0; i < prefix.length; i++) {
      const char = prefix[i];

      if (!currentNode.children.has(char)) {
        return false; // Prefix not found
      }

      currentNode = currentNode.children.get(char);
    }

    return true;
  }
}

// Usage:
const trie = new Trie();
trie.insert("apple");
trie.insert("app");
console.log(trie.search("apple")); // true
console.log(trie.search("app")); // true
console.log(trie.search("ap")); // false
console.log(trie.startsWith("app")); // true
console.log(trie.startsWith("ap")); // true
console.log(trie.startsWith("b")); // false
