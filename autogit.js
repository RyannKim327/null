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

  // Insert a word into the Trie
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

  // Search for a word in the Trie
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

  // Delete a word from the Trie
  delete(word) {
    const deleteHelper = (node, word, index) => {
      if (index === word.length) {
        if (!node.isEndOfWord) {
          return false;
        }
        
        node.isEndOfWord = false;
        return Object.keys(node.children).length === 0;
      }
      
      const ch = word[index];
      
      if (!node.children[ch]) {
        return false;
      }
      
      const shouldDeleteCurrentNode = deleteHelper(node.children[ch], word, index + 1);
      
      if (shouldDeleteCurrentNode) {
        delete node.children[ch];
        return Object.keys(node.children).length === 0;
      }
      
      return false;
    };
    
    deleteHelper(this.root, word, 0);
  }
}
// Usage example
const trie = new Trie();

trie.insert("apple");
trie.insert("banana");
trie.insert("orange");

console.log(trie.search("apple"));     // Output: true
console.log(trie.search("banana"));    // Output: true
console.log(trie.search("orange"));    // Output: true
console.log(trie.search("grape"));     // Output: false

trie.delete("banana");
console.log(trie.search("banana"));    // Output: false
