class TrieNode {
  constructor() {
    this.children = {}; // Mapping of characters to TrieNode
    this.isEndOfWord = false; // Flag indicating end of a word
  }
}
class Trie {
  constructor() {
    this.root = new TrieNode(); // Initialize the root node
  }

  // Insert a word into the Trie
  insert(word) {
    let node = this.root;
    for (let i = 0; i < word.length; i++) {
      const char = word[i];
      if (!(char in node.children)) {
        node.children[char] = new TrieNode(); // Create a new node if character doesn't exist
      }
      node = node.children[char]; // Move to the next node
    }
    node.isEndOfWord = true; // Mark end of word
  }

  // Search for a word in the Trie
  search(word) {
    let node = this.root;
    for (let i = 0; i < word.length; i++) {
      const char = word[i];
      if (!(char in node.children)) {
        return false; // Word not found
      }
      node = node.children[char]; // Move to the next node
    }
    return node.isEndOfWord; // Return true only if it's end of a word
  }

  // Check if any word starts with the given prefix
  startsWith(prefix) {
    let node = this.root;
    for (let i = 0; i < prefix.length; i++) {
      const char = prefix[i];
      if (!(char in node.children)) {
        return false; // Prefix not found
      }
      node = node.children[char]; // Move to the next node
    }
    return true; // Prefix found
  }
}
// Create a new Trie
const trie = new Trie();

// Insert words into the Trie
trie.insert("apple");
trie.insert("banana");
trie.insert("apply");
trie.insert("bat");
trie.insert("batman");

// Search for words in the Trie
console.log(trie.search("apple")); // true
console.log(trie.search("banana")); // true
console.log(trie.search("app")); // false
console.log(trie.search("batman")); // true

// Check if any word starts with a prefix
console.log(trie.startsWith("app")); // true
console.log(trie.startsWith("ban")); // true
console.log(trie.startsWith("bat")); // true
console.log(trie.startsWith("bats")); // false
