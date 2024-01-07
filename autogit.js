class TrieNode {
  constructor() {
    this.children = {}; // object to store children nodes
    this.isEndOfWord = false; // flag to mark end of a word
  }
}
class Trie {
  constructor() {
    this.root = new TrieNode(); // create the root node
  }
  
  // Function to insert a word into the trie
  insert(word) {
    let curr = this.root;
    
    // iterate through each character of the word
    for (let i = 0; i < word.length; i++) {
      const ch = word[i];
      
      // create a new node if the character doesn't exist
      if (!curr.children[ch]) {
        curr.children[ch] = new TrieNode();
      }
      
      // move to the next node
      curr = curr.children[ch];
    }
    
    // mark the end of word
    curr.isEndOfWord = true;
  }
  
  // Function to search for a word in the trie
  search(word) {
    let curr = this.root;
    
    // iterate through each character of the word
    for (let i = 0; i < word.length; i++) {
      const ch = word[i];
      
      // return false if character not found
      if (!curr.children[ch]) {
        return false;
      }
      
      // move to the next node
      curr = curr.children[ch];
    }
    
    // return true if the word is found and marked as the end
    return curr.isEndOfWord;
  }
  
  // Function to check if the trie is empty
  isEmpty() {
    return Object.keys(this.root.children).length === 0;
  }
  
  // Function to delete a word from the trie
  delete(word, node = this.root, index = 0) {
    // Base case: trie is empty
    if (this.isEmpty()) {
      return;
    }
    
    // Base case: end of word
    if (index === word.length) {
      if (!node.isEndOfWord) {
        return;
      }
      
      node.isEndOfWord = false;
      
      // delete the node if it has no children
      if (Object.keys(node.children).length === 0) {
        delete node;
      }
      
      return;
    }
    
    const ch = word[index];
    const nextNode = node.children[ch];
    
    // recursive call to delete the next node
    this.delete(word, nextNode, index + 1);
    
    // delete the current node if it has no children and is not marked as end
    if (!nextNode.isEndOfWord && Object.keys(nextNode.children).length === 0) {
      delete node.children[ch];
    }
  }
}
// Create a trie
const trie = new Trie();

// Insert words
trie.insert("apple");
trie.insert("banana");
trie.insert("cherry");

// Search for words
console.log(trie.search("apple")); // Output: true
console.log(trie.search("banana")); // Output: true
console.log(trie.search("orange")); // Output: false

// Delete a word
trie.delete("banana");
console.log(trie.search("banana")); // Output: false
