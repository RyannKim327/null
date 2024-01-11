class TrieNode {
  constructor() {
    this.children = new Map(); // For storing child nodes
    this.isEndOfWord = false; // Indicates if this node represents the end of a word
  }
}
class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  // Function to insert a word into the trie
  insert(word) {
    let currentNode = this.root;
    for (let i = 0; i < word.length; i++) {
      const char = word[i];
      if (!currentNode.children.has(char)) {
        currentNode.children.set(char, new TrieNode());
      }
      currentNode = currentNode.children.get(char);
    }
    currentNode.isEndOfWord = true; // Mark the end of word
  }

  // Function to search for a word in the trie
  search(word) {
    let currentNode = this.root;
    for (let i = 0; i < word.length; i++) {
      const char = word[i];
      if (!currentNode.children.has(char)) {
        return false; // Word not found
      }
      currentNode = currentNode.children.get(char);
    }
    return currentNode.isEndOfWord; // Return true if end of word is reached
  }

  // Function to delete a word from the trie
  delete(word) {
    this._delete(this.root, word, 0);
  }

  _delete(currentNode, word, index) {
    if (index === word.length) {
      // Reached end of word
      if (!currentNode.isEndOfWord) {
        return; // Word does not exist
      }
      currentNode.isEndOfWord = false; // Unmark the end of word
      return;
    }

    const char = word[index];
    if (!currentNode.children.has(char)) {
      return; // Word does not exist
    }

    const childNode = currentNode.children.get(char);
    this._delete(childNode, word, index + 1);

    // Delete child node if it is not needed and has no other children
    if (childNode.children.size === 0 && !childNode.isEndOfWord) {
      currentNode.children.delete(char);
    }
  }
}
// Create a new Trie
const trie = new Trie();

// Insert words into the Trie
trie.insert("apple");
trie.insert("banana");
trie.insert("orange");

// Search for words in the Trie
console.log(trie.search("apple")); // Output: true
console.log(trie.search("orange")); // Output: true
console.log(trie.search("grape")); // Output: false

// Delete a word from the Trie
trie.delete("apple");
console.log(trie.search("apple")); // Output: false
console.log(trie.search("banana")); // Output: true
