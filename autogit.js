class TrieNode {
  constructor() {
    this.children = new Map(); // Use a map for efficient key-value lookup
    this.isEndOfWord = false;
  }
}
class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  insert(word) {
    let currentNode = this.root;

    for (let i = 0; i < word.length; i++) {
      const char = word[i];

      // Create a new node if the path doesn't exist
      if (!currentNode.children.has(char)) {
        currentNode.children.set(char, new TrieNode());
      }

      currentNode = currentNode.children.get(char);
    }

    // Mark the end of word
    currentNode.isEndOfWord = true;
  }

  search(word) {
    let currentNode = this.root;

    for (let i = 0; i < word.length; i++) {
      const char = word[i];

      if (currentNode.children.has(char)) {
        currentNode = currentNode.children.get(char);
      } else {
        return false; // Path doesn't exist
      }
    }

    return currentNode.isEndOfWord; // Check if it's the end of a word
  }

  startsWith(prefix) {
    let currentNode = this.root;

    for (let i = 0; i < prefix.length; i++) {
      const char = prefix[i];

      if (currentNode.children.has(char)) {
        currentNode = currentNode.children.get(char);
      } else {
        return false; // Path doesn't exist
      }
    }

    return true; // Prefix exists
  }
}
const trie = new Trie();

trie.insert("apple");
trie.insert("application");
trie.insert("banana");

console.log(trie.search("apple")); // Output: true
console.log(trie.search("app")); // Output: false
console.log(trie.startsWith("app")); // Output: true
