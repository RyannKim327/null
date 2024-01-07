class TrieNode {
  constructor() {
    this.value = null; // Value of the node
    this.isEndOfWord = false; // Flag to indicate end of word
    this.children = new Map(); // Map of child nodes
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode(); // Root node of the trie
  }

  insert(word) {
    let node = this.root;

    for (let i = 0; i < word.length; i++) {
      const char = word[i];
      
      // If the current character is not in the child nodes, create a new node
      if (!node.children.has(char)) {
        node.children.set(char, new TrieNode());
      }
      
      // Move to the next node
      node = node.children.get(char);
    }

    // Mark the end of word
    node.isEndOfWord = true;
  }

  search(word) {
    let node = this.root;

    for (let i = 0; i < word.length; i++) {
      const char = word[i];
      
      // If the current character is not in the child nodes, the word is not in the trie
      if (!node.children.has(char)) {
        return false;
      }
      
      // Move to the next node
      node = node.children.get(char);
    }

    // Return true if the end of word flag is set
    return node.isEndOfWord;
  }

  startsWith(prefix) {
    let node = this.root;

    for (let i = 0; i < prefix.length; i++) {
      const char = prefix[i];
      
      // If the current character is not in the child nodes, the prefix is not in the trie
      if (!node.children.has(char)) {
        return false;
      }
      
      // Move to the next node
      node = node.children.get(char);
    }

    // Return true as long as the prefix is found
    return true;
  }
}
const trie = new Trie();
trie.insert("apple");
console.log(trie.search("apple")); // true
console.log(trie.search("app")); // false
console.log(trie.startsWith("app")); // true
trie.insert("app");
console.log(trie.search("app")); // true
