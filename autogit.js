class TrieNode {
  constructor() {
    this.children = {}; // Each node can have multiple children
    this.isEndOfWord = false; // Indicates if the node represents the end of a word
  }
}
class Trie {
  constructor() {
    this.root = new TrieNode(); // Initialize the root node of the Trie
  }

  // Insert a word into the Trie
  insert(word) {
    let currNode = this.root;

    for (let i = 0; i < word.length; i++) {
      const char = word[i];

      if (!currNode.children[char]) {
        currNode.children[char] = new TrieNode();
      }

      currNode = currNode.children[char];
    }

    currNode.isEndOfWord = true; // Mark the last node as the end of the word
  }

  // Search for a word in the Trie
  search(word) {
    let currNode = this.root;

    for (let i = 0; i < word.length; i++) {
      const char = word[i];

      if (!currNode.children[char]) {
        return false; // Word not found
      }

      currNode = currNode.children[char];
    }

    return currNode.isEndOfWord; // Return true if the last node is marked as the end of the word
  }

  // Check if a word's prefix exists in the Trie
  startsWith(prefix) {
    let currNode = this.root;

    for (let i = 0; i < prefix.length; i++) {
      const char = word[i];

      if (!currNode.children[char]) {
        return false; // Prefix not found
      }

      currNode = currNode.children[char];
    }

    return true; // Prefix found
  }
}
// Create a Trie instance and test its functionality
const trie = new Trie();

trie.insert("apple");
console.log(trie.search("apple")); // Output: true
console.log(trie.search("app")); // Output: false

trie.insert("cat");
console.log(trie.search("cat")); // Output: true
console.log(trie.startsWith("ca")); // Output: true

trie.insert("dog");
console.log(trie.search("dog")); // Output: true

console.log(trie.search("doggy")); // Output: false
