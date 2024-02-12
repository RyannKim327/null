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
  
  insert(word) {
    let currentNode = this.root;
    
    // Loop through each character of the word
    for (let i = 0; i < word.length; i++) {
      const char = word[i];
      
      // If the character doesn't exist, create a new TrieNode
      if (!currentNode.children.hasOwnProperty(char)) {
        currentNode.children[char] = new TrieNode();
      }
      
      // Move to the next TrieNode
      currentNode = currentNode.children[char];
    }
    
    // Mark the last TrieNode as the end of a word
    currentNode.isEndOfWord = true;
  }
  
  search(word) {
    let currentNode = this.root;
    
    // Loop through each character of the word
    for (let i = 0; i < word.length; i++) {
      const char = word[i];
      
      // If the character doesn't exist, the word doesn't exist in the Trie
      if (!currentNode.children.hasOwnProperty(char)) {
        return false;
      }
      
      // Move to the next TrieNode
      currentNode = currentNode.children[char];
    }
    
    // Return true if the last TrieNode is the end of a word
    return currentNode.isEndOfWord;
  }
  
  startsWith(prefix) {
    let currentNode = this.root;
    
    // Loop through each character of the prefix
    for (let i = 0; i < prefix.length; i++) {
      const char = prefix[i];
      
      // If the character doesn't exist, the prefix doesn't exist in the Trie
      if (!currentNode.children.hasOwnProperty(char)) {
        return false;
      }
      
      // Move to the next TrieNode
      currentNode = currentNode.children[char];
    }
    
    // Return true since the prefix exists in the Trie
    return true;
  }
}
// Create a new instance of the Trie
const trie = new Trie();

// Insert words into the Trie
trie.insert("apple");
trie.insert("banana");
trie.insert("orange");

// Search for words in the Trie
console.log(trie.search("apple"));   // true
console.log(trie.search("banana"));  // true
console.log(trie.search("orange"));  // true
console.log(trie.search("pear"));    // false

// Check prefixes in the Trie
console.log(trie.startsWith("app"));   // true
console.log(trie.startsWith("ban"));   // true
console.log(trie.startsWith("oran"));  // true
console.log(trie.startsWith("pea"));   // false
