class Node {
  constructor() {
    this.children = {};
    this.suffixLink = null;
  }
}
class SuffixTree {
  constructor() {
    this.root = new Node();
    this.inputString = "";
  }
  
  // Build the suffix tree from an input string
  build(inputString) {
    this.inputString = inputString;
    for (let i = 0; i < inputString.length; i++) {
      this._addSuffix(i);
    }
  }
  
  // Add a suffix to the tree starting at a given position
  _addSuffix(position) {
    let currentNode = this.root;
    for (let i = position; i < this.inputString.length; i++) {
      const currentChar = this.inputString[i];
      
      if (!currentNode.children[currentChar]) {
        currentNode.children[currentChar] = new Node();
      }
      
      currentNode = currentNode.children[currentChar];
    }
  }
  
  // Search for a substring in the suffix tree
  search(substring) {
    let currentNode = this.root;
    for (let i = 0; i < substring.length; i++) {
      const currentChar = substring[i];
      
      if (!currentNode.children[currentChar]) {
        return false; // Substring not found
      }
      
      currentNode = currentNode.children[currentChar];
    }
    
    return true; // Substring found
  }
}
const tree = new SuffixTree();
tree.build("banana");

console.log(tree.search("an")); // Output: true
console.log(tree.search("na")); // Output: true
console.log(tree.search("apple")); // Output: false
