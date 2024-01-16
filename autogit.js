class TrieNode {
  constructor() {
    this.children = {};
    this.isEndOfWord = false;
  }
}
class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  // Inserts a word into the trie
  insert(word) {
    let node = this.root;
    
    for (let char of word) {
      if (!node.children[char]) {
        node.children[char] = new TrieNode();
      }
      node = node.children[char];
    }
    
    node.isEndOfWord = true;
  }

  // Returns true if the word is in the trie, otherwise false
  search(word) {
    let node = this.root;

    for (let char of word) {
      if (!node.children[char]) {
        return false;
      }
      node = node.children[char];
    }

    return node.isEndOfWord;
  }

  // Returns true if there is any word in the trie that starts with the given prefix
  startsWith(prefix) {
    let node = this.root;

    for (let char of prefix) {
      if (!node.children[char]) {
        return false;
      }
      node = node.children[char];
    }

    return true;
  }
}
// Create a new trie
const trie = new Trie();

// Insert words into the trie
trie.insert("apple");
trie.insert("banana");
trie.insert("orange");

// Search for words in the trie
console.log(trie.search("apple")); // Output: true
console.log(trie.search("banana")); // Output: true
console.log(trie.search("orange")); // Output: true
console.log(trie.search("grape")); // Output: false

// Check if words start with a given prefix
console.log(trie.startsWith("app")); // Output: true
console.log(trie.startsWith("ban")); // Output: true
console.log(trie.startsWith("ora")); // Output: true
console.log(trie.startsWith("gr")); // Output: false
