class TrieNode {
  constructor() {
    this.character = '';
    this.isEndOfWord = false;
    this.children = {};
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
      const char = word[i];
      
      if (!current.children[char]) {
        current.children[char] = new TrieNode();
        current.children[char].character = char;
      }
      
      current = current.children[char];
    }
    
    current.isEndOfWord = true;
  }
  
  // Method to search for a word in the trie
  search(word) {
    let current = this.root;
    
    for (let i = 0; i < word.length; i++) {
      const char = word[i];
      
      if (!current.children[char]) {
        return false;
      }
      
      current = current.children[char];
    }
    
    return current.isEndOfWord;
  }
  
  // Method to check if a word prefix exists in the trie
  startsWith(prefix) {
    let current = this.root;
    
    for (let i = 0; i < prefix.length; i++) {
      const char = prefix[i];
      
      if (!current.children[char]) {
        return false;
      }
      
      current = current.children[char];
    }
    
    return true;
  }
}
const trie = new Trie();
trie.insert("hello");
trie.insert("world");
trie.insert("hey");

// Test searching for words
console.log(trie.search("hello"));  // true
console.log(trie.search("world"));  // true
console.log(trie.search("he"));     // false

// Test checking prefixes
console.log(trie.startsWith("hel"));   // true
console.log(trie.startsWith("wo"));    // false
console.log(trie.startsWith("hey"));   // true
