class Node {
  constructor() {
    this.children = {}; // Map of character to child node
    this.start = -1; // Starting index of the substring in the input string
    this.end = -1; // Ending index of the substring in the input string
  }
}
class SuffixTree {
  constructor(input) {
    this.root = new Node();
    this.input = input;
    this.build();
  }

  // Insert a suffix into the suffix tree
  insertSuffix(suffix, suffixIndex) {
    let currentNode = this.root;

    for(let i = 0; i < suffix.length; i++) {
      const char = suffix[i];
      
      // Check if the character already exists as a child of the current node
      if(!(char in currentNode.children)) {
        currentNode.children[char] = new Node();
      }
      
      currentNode = currentNode.children[char];
    }
    
    // Mark the end index and store the suffix index at the leaf node
    currentNode.end = suffix.length - 1;
    currentNode.start = suffixIndex;
  }

  // Build the suffix tree
  build() {
    const n = this.input.length;
    
    for (let i = 0; i < n; i++) {
      const suffix = this.input.slice(i);
      this.insertSuffix(suffix, i);
    }
  }

  // Search for a pattern in the suffix tree
  search(pattern) {
    let currentNode = this.root;

    for (let i = 0; i < pattern.length; i++) {
      const char = pattern[i];
      
      // Check if the character exists as a child of the current node
      if (!(char in currentNode.children)) {
        return [];
      }
      
      currentNode = currentNode.children[char];
    }
    
    return this.getLeafNodes(currentNode);
  }

  // Get all leaf nodes of a given node
  getLeafNodes(node) {
    let leafNodes = [];
    
    if (node.start != -1) {
      leafNodes.push(node.start);
    } else {
      for (const childNode of Object.values(node.children)) {
        leafNodes = leafNodes.concat(this.getLeafNodes(childNode));
      }
    }
    
    return leafNodes;
  }
}
const input = "banana";
const suffixTree = new SuffixTree(input);

const pattern = "an";
const matches = suffixTree.search(pattern);
console.log("Pattern matches found at indices:", matches);
