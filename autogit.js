// Node class to represent each node in the trie
class TrieNode {
  constructor() {
    this.children = {};
    this.isEndOfWord = false;
  }
}

// Trie class
class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  // Function to insert a word into the trie
  insert(word) {
    let node = this.root;

    // Traverse through each character of the word
    for (let i = 0; i < word.length; i++) {
      const char = word[i];

      // If the current character is not present as a child in the Trie
      // Create a new node and set it as a child
      if (!node.children[char]) {
        node.children[char] = new TrieNode();
      }

      // Move to the next node
      node = node.children[char];
    }

    // Mark the end of word
    node.isEndOfWord = true;
  }

  // Function to search for a word in the trie
  search(word) {
    let node = this.root;

    // Traverse through each character of the word
    for (let i = 0; i < word.length; i++) {
      const char = word[i];

      // If the current character is not present as a child in the Trie
      // Word doesn't exist, return false
      if (!node.children[char]) {
        return false;
      }

      // Move to the next node
      node = node.children[char];
    }

    // Return true only if the node at the end of word is marked
    return node.isEndOfWord;
  }

  // Function to delete a word from the trie
  delete(word) {
    this.deleteRecursive(this.root, word, 0);
  }

  deleteRecursive(node, word, index) {
    // Base case: If we have reached the end of word
    if (index === word.length) {
      // Unmark the node as the end of word
      if (!node.isEndOfWord) {
        return false; // Word doesn't exist
      }
      node.isEndOfWord = false;

      // Check if the current node has no other children
      return Object.keys(node.children).length === 0;
    }

    const char = word[index];
    const childNode = node.children[char];

    // If the current character is not present as a child in the Trie
    // Word doesn't exist, return false
    if (!childNode) {
      return false;
    }

    const shouldDeleteChild = this.deleteRecursive(childNode, word, index + 1);

    // If the child node has no other children and it's not the end of another word,
    // Delete the child node
    if (shouldDeleteChild) {
      delete node.children[char];
      return Object.keys(node.children).length === 0;
    }

    return false;
  }
}

// Usage:
const trie = new Trie();
trie.insert("apple");
trie.insert("application");
console.log(trie.search("apple")); // Output: true
console.log(trie.search("app")); // Output: false
console.log(trie.search("application")); // Output: true
trie.delete("application");
console.log(trie.search("application")); // Output: false
