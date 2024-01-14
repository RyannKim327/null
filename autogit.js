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
    let currentNode = this.root;

    for (let i = 0; i < word.length; i++) {
      const char = word[i];
      if (!currentNode.children.has(char)) {
        currentNode.children.set(char, new TrieNode());
      }
      currentNode = currentNode.children.get(char);
    }

    currentNode.isEndOfWord = true;
  }

  // Search for a word in the Trie
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

  // Check if a prefix exists in the Trie
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
// Create a new Trie instance
const trie = new Trie();

// Insert words into the Trie
trie.insert("apple");
trie.insert("banana");
trie.insert("orange");
 
// Search for words in the Trie
console.log(trie.search("apple")); // Output: true
console.log(trie.search("banana")); // Output: true
console.log(trie.search("orange")); // Output: true
console.log(trie.search("grape")); // Output: false
 
// Search for prefixes in the Trie
console.log(trie.startsWith("app")); // Output: true
console.log(trie.startsWith("ban")); // Output: true
console.log(trie.startsWith("ora")); // Output: true
console.log(trie.startsWith("gr")); // Output: false
