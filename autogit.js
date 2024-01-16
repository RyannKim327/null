class Node {
  constructor() {
    this.children = {}; // Map of child nodes
  }
}

class SuffixTree {
  constructor() {
    this.root = new Node(); // Root node of the tree
    this.wordTerminator = '$'; // Symbol to mark the end of a word
  }
  
  // Method to add a word to the suffix tree
  addWord(word) {
    word += this.wordTerminator; // Add word terminator symbol to word
    
    // Iterate through each suffix of the word
    for (let i = 0; i < word.length; i++) {
      let currentNode = this.root; // Start from root for each suffix
      
      // Add each character of the suffix to the tree
      for (let j = i; j < word.length; j++) {
        const char = word.charAt(j);
        
        // If the character is not in the current node's children, add a new node
        if (!currentNode.children[char]) {
          currentNode.children[char] = new Node();
        }
        
        // Move to the next node
        currentNode = currentNode.children[char];
      }
    }
  }
}
const suffixTree = new SuffixTree();
suffixTree.addWord("banana");
suffixTree.addWord("apple");
