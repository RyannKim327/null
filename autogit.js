class TrieNode {
  constructor() {
    this.value = null;
    this.children = new Map();
  }
}
class Trie {
  constructor() {
    this.root = new TrieNode();
  }
}
Trie.prototype.insert = function (word) {
  let node = this.root;
  
  for (let i = 0; i < word.length; i++) {
    const char = word[i];
    
    if (!node.children.has(char)) {
      node.children.set(char, new TrieNode());
    }
    
    node = node.children.get(char);
  }
  
  node.value = word; // Mark the last node with the word value
};
Trie.prototype.search = function (word) {
  let node = this.root;
  
  for (let i = 0; i < word.length; i++) {
    const char = word[i];
    
    if (!node.children.has(char)) {
      return false; // Word doesn't exist
    }
    
    node = node.children.get(char);
  }
  
  return node.value === word; // Return true if the node represents the complete word
};
Trie.prototype.startsWith = function (prefix) {
  let node = this.root;
  
  for (let i = 0; i < prefix.length; i++) {
    const char = prefix[i];
    
    if (!node.children.has(char)) {
      return false; // Prefix doesn't exist
    }
    
    node = node.children.get(char);
  }
  
  return true; // Prefix exists
};
