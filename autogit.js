// TrieNode class
class TrieNode {
  constructor() {
    this.children = {}; // Mapping of character to TrieNode
    this.isEndOfWord = false; // Represents if it's the end of a word
  }
}

// Trie class
class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  // Insert a word into the Trie
  insert(word) {
    let currentNode = this.root;

    for (let i = 0; i < word.length; i++) {
      const char = word[i];

      if (!currentNode.children[char]) {
        currentNode.children[char] = new TrieNode();
      }

      currentNode = currentNode.children[char];
    }

    currentNode.isEndOfWord = true;
  }

  // Search if a word exists in the Trie
  search(word) {
    let currentNode = this.root;

    for (let i = 0; i < word.length; i++) {
      const char = word[i];

      if (currentNode.children[char]) {
        currentNode = currentNode.children[char];
      } else {
        return false;
      }
    }

    return currentNode.isEndOfWord;
  }

  // Check if a given prefix exists in the Trie
  startsWith(prefix) {
    let currentNode = this.root;

    for (let i = 0; i < prefix.length; i++) {
      const char = prefix[i];

      if (currentNode.children[char]) {
        currentNode = currentNode.children[char];
      } else {
        return false;
      }
    }

    return true;
  }
}

// Usage
const trie = new Trie();

trie.insert("apple");
trie.insert("banana");
trie.insert("orange");

console.log(trie.search("apple")); // true
console.log(trie.search("orange")); // true
console.log(trie.search("banana")); // true
console.log(trie.search("grape")); // false

console.log(trie.startsWith("app")); // true
console.log(trie.startsWith("oran")); // true
console.log(trie.startsWith("ban")); // true
console.log(trie.startsWith("gr")); // false
