// TrieNode class
class TrieNode {
  constructor() {
    this.children = new Map();
    this.isEndOfWord = false;
  }

  // Function to mark the current node as the end of a word
  setEndOfWord() {
    this.isEndOfWord = true;
  }

  // Function to check if a node represents the end of a word
  isWordEnd() {
    return this.isEndOfWord;
  }
}

// Trie class
class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  // Function to insert a word into the trie
  insert(word) {
    let currentNode = this.root;

    for (let i = 0; i < word.length; i++) {
      const char = word[i];

      // Check if the current character is already present in the trie
      if (!currentNode.children.has(char)) {
        // If not, create a new node
        currentNode.children.set(char, new TrieNode());
      }

      // Move to the next node
      currentNode = currentNode.children.get(char);
    }

    // Mark the last node as the end of a word
    currentNode.setEndOfWord();
  }

  // Function to search for a word in the trie
  search(word) {
    let currentNode = this.root;

    for (let i = 0; i < word.length; i++) {
      const char = word[i];

      // Check if the current character is present in the trie
      if (!currentNode.children.has(char)) {
        return false;
      }

      // Move to the next node
      currentNode = currentNode.children.get(char);
    }

    // Return true if the last node represents the end of a word
    return currentNode.isWordEnd();
  }

  // Function to delete a word from the trie
  delete(word) {
    // Helper function to recursively delete nodes
    function deleteHelper(node, word, index) {
      // Base condition: word not found
      if (index === word.length) {
        if (!node.isWordEnd()) {
          return false;
        }

        // Unmark the last node
        node.setEndOfWord(false);

        // Delete the node if it has no other children
        return node.children.size === 0;
      }

      const char = word[index];

      // Check if the current character is present in the trie
      if (!node.children.has(char)) {
        return false;
      }

      const childNode = node.children.get(char);

      // Recursively delete the child node
      const shouldDeleteChild = deleteHelper(childNode, word, index + 1);

      // Delete the child node if necessary
      if (shouldDeleteChild) {
        node.children.delete(char);
        return node.children.size === 0;
      }

      return false;
    }

    // Start deletion from the root node
    deleteHelper(this.root, word, 0);
  }
}
const trie = new Trie();

trie.insert("apple");
console.log(trie.search("apple")); // Output: true
console.log(trie.search("app"));   // Output: false

trie.insert("app");
console.log(trie.search("app"));   // Output: true

trie.delete("app");
console.log(trie.search("app"));   // Output: false
