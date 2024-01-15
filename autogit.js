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

  // Method to insert a word into the trie
  insert(word) {
    let current = this.root;

    for (let i = 0; i < word.length; i++) {
      const ch = word[i];
      if (!current.children[ch]) {
        current.children[ch] = new TrieNode();
      }
      current = current.children[ch];
    }

    current.isEndOfWord = true;
  }

  // Method to search for a word in the trie
  search(word) {
    let current = this.root;

    for (let i = 0; i < word.length; i++) {
      const ch = word[i];
      if (!current.children[ch]) {
        return false;
      }
      current = current.children[ch];
    }

    return current.isEndOfWord;
  }

  // Method to delete a word from the trie
  delete(word) {
    this.deleteHelper(this.root, word, 0);
  }

  deleteHelper(current, word, index) {
    if (index === word.length) {
      if (!current.isEndOfWord) return; // Word doesn't exist in trie
      current.isEndOfWord = false; // Mark word as deleted

      // If current node has no other children, return true to delete it from parent
      return Object.keys(current.children).length === 0;
    }

    const ch = word[index];
    if (!current.children[ch]) return; // Word doesn't exist in trie

    const shouldDeleteCurrentNode = this.deleteHelper(current.children[ch], word, index + 1);

    if (shouldDeleteCurrentNode) {
      delete current.children[ch];

      // Return true to delete current node from parent
      return Object.keys(current.children).length === 0;
    }

    return false;
  }
}
// Create a new trie
const trie = new Trie();

// Insert words into the trie
trie.insert("apple");
trie.insert("app");
trie.insert("ape");
trie.insert("banana");

// Search for words in the trie
console.log(trie.search("app")); // Output: true
console.log(trie.search("banana")); // Output: true
console.log(trie.search("orange")); // Output: false

// Delete a word from the trie
trie.delete("app");
console.log(trie.search("app")); // Output: false
