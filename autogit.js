// TrieNode class
class TrieNode {
  constructor() {
    this.children = new Map(); // Map to store child nodes
    this.isEndOfWord = false; // Whether current node represents end of a word
  }
}

// Trie class
class Trie {
  constructor() {
    this.root = new TrieNode(); // Root node of the trie
  }

  // Insert a word into the trie
  insert(word) {
    let currentNode = this.root;

    // Iterate through each character of the word
    for (let i = 0; i < word.length; i++) {
      const char = word[i];

      // Check if the character already exists in the trie
      if (!currentNode.children.has(char)) {
        // Create a new node if not exists
        currentNode.children.set(char, new TrieNode());
      }

      // Move to the next node
      currentNode = currentNode.children.get(char);
    }

    // Mark the end of the word
    currentNode.isEndOfWord = true;
  }

  // Search for a word in the trie
  search(word) {
    let currentNode = this.root;

    // Iterate through each character of the word
    for (let i = 0; i < word.length; i++) {
      const char = word[i];

      // Check if the character exists in the trie
      if (!currentNode.children.has(char)) {
        return false; // Word not found
      }

      // Move to the next node
      currentNode = currentNode.children.get(char);
    }

    // Return true if the last node represents the end of the word
    return currentNode.isEndOfWord;
  }

  // Remove a word from the trie
  remove(word) {
    const removeHelper = (node, word, index) => {
      // Base case: empty trie node
      if (!node) return false;

      // Base case: end of the word
      if (index === word.length) {
        if (!node.isEndOfWord) return false;

        // Unmark the end of the word
        node.isEndOfWord = false;

        // Remove the node if it has no children
        return node.children.size === 0;
      }

      const char = word[index];

      // Check if the character exists in the trie
      const nextNode = node.children.get(char);
      if (!nextNode) return false;

      // Recursive call to move to the next node
      const shouldDeleteCurrentNode = removeHelper(nextNode, word, index + 1);

      // Remove the node if required
      if (shouldDeleteCurrentNode) {
        node.children.delete(char);
        return node.children.size === 0;
      }

      return false;
    };

    // Start the recursive remove process
    removeHelper(this.root, word, 0);
  }
}

// Usage
const trie = new Trie();
trie.insert('apple');
trie.insert('banana');
console.log(trie.search('apple')); // true
console.log(trie.search('banana')); // true
console.log(trie.search('orange')); // false

trie.remove('banana');
console.log(trie.search('banana')); // false
