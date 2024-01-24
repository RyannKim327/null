class Node {
  constructor() {
    this.edges = {}; // Children edges
    this.start = null; // Starting index of the substring
    this.end = null; // Ending index of the substring
  }
}
class SuffixTree {
  constructor() {
    this.root = new Node();
    this.word = null; // The word/substring represented by the tree
  }

  buildTree(text) {
    // Store the word/substring for later reference
    this.word = text + '$'; // Add a unique delimiter ('$') to mark the end of the word/substring

    // Construct the suffix tree
    for (let i = 0; i < this.word.length; i++) {
      this._addSuffix(i);
    }
  }

  _addSuffix(start) {
    let currentNode = this.root;
    let index = start;
    
    while (index < this.word.length) {
      if (!currentNode.edges[this.word[index]]) {
        // Create a new edge if it doesn't exist
        currentNode.edges[this.word[index]] = new Node();
        currentNode.edges[this.word[index]].start = start;
      }
      
      const edge = currentNode.edges[this.word[index]];
      let i = 0;

      // Find the common substring following the current edge
      while (start + i < this.word.length && edge.start + i < this.word.length && this.word[start + i] === this.word[edge.start + i]) {
        i++;
      }

      if (edge.start + i === edge.end) {
        // Reached the end of the edge, move to the next node
        currentNode = edge;
        index += i;
      } else {
        // Split the edge
        const splitNode = new Node();
        splitNode.start = edge.start;
        splitNode.end = edge.start + i;

        currentNode.edges[this.word[edge.start]] = splitNode;
        splitNode.edges[this.word[edge.start + i]] = edge;
        edge.start += i;

        break;
      }
    }
  }
}
const suffixTree = new SuffixTree();
suffixTree.buildTree('banana');

// Test by printing the tree structure
console.log(suffixTree.root);
