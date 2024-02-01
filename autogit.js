class Node {
  constructor(start, end) {
    this.children = {};
    this.start = start;
    this.end = end;
    this.suffixLink = null;
  }
}
class SuffixTree {
  constructor(word) {
    this.root = new Node(-1, -1); // The root node
    this.word = word;
    this.wordLength = word.length;
    this.activeNode = this.root;
    this.activeEdge = 0;
    this.activeLength = 0;
    this.remainingSuffixCount = 0;
    this.lastNewNode = null;
    this.end = [-1]; // A dummy node to store the end index of all suffixes
    this.root.suffixLink = this.root; // The root node's suffix link points back to itself
    this.build();
  }
  
  build() {
    for (let i = 0; i < this.wordLength; i++) {
      this.extendSuffixTree(i);
    }
  }
  
  extendSuffixTree(pos) {
   // Your code for extending the suffix tree goes here
  }
}
extendSuffixTree(pos) {
    this.end[0] = pos + 1;
    this.remainingSuffixCount++;
    this.lastNewNode = null;
    
    while (this.remainingSuffixCount > 0) {
      if (this.activeLength === 0) {
        this.activeEdge = pos; // Set the active edge to the current position
      }
      
      if (!(this.word[this.activeEdge] in this.activeNode.children)) {
        // If the active edge is not present in the active node's children,
        // create a new leaf node and add it as a child
        const leafNode = new Node(pos, this.wordLength);
        this.activeNode.children[this.word[this.activeEdge]] = leafNode;
        
        if (this.lastNewNode !== null) {
          this.lastNewNode.suffixLink = this.activeNode;
          this.lastNewNode = null;
        }
      } else {
        const nextNode = this.activeNode.children[this.word[this.activeEdge]];
        
        if (this.walkDown(nextNode)) {
          // If the active length is greater than the edge length, move to the next edge
          continue;
        }
        
        if (this.word[nextNode.start + this.activeLength] === this.word[pos]) {
          // If the character at the end of the active edge is the same as the current character,
          // increment the active length and check the next phase
          this.activeLength++;
          
          if (this.lastNewNode !== null && this.activeNode !== this.root) {
            this.lastNewNode.suffixLink = this.activeNode;
            this.lastNewNode = null;
          }
          
          // Move to the next iteration
          break;
        }
        
        // If the characters don't match, split the edge and create a new internal node
        const splitEnd = nextNode.start + this.activeLength - 1;
        const splitNode = new Node(nextNode.start, splitEnd);
        
        // Create a new leaf node for the current character
        const leafNode = new Node(pos, this.wordLength);
        
        nextNode.start += this.activeLength;
        splitNode.children[this.word[nextNode.start]] = nextNode;
        splitNode.children[this.word[pos]] = leafNode;
        
        this.activeNode.children[this.word[this.activeEdge]] = splitNode;
        
        if (this.lastNewNode !== null) {
          this.lastNewNode.suffixLink = splitNode;
        }
        
        this.lastNewNode = splitNode;
      }
      
      this.remainingSuffixCount--;
      
      if (this.activeNode === this.root && this.activeLength > 0) {
        this.activeLength--;
        this.activeEdge = pos - this.remainingSuffixCount + 1;
      } else if (this.activeNode !== this.root) {
        this.activeNode = this.activeNode.suffixLink || this.root;
      }
    }
  }
  
  walkDown(node) {
    if (this.activeLength >= node.end - node.start) {
      this.activeEdge += node.end - node.start;
      this.activeLength -= node.end - node.start;
      this.activeNode = node;
      return true;
    }
    return false;
  }
const word = 'banana';
const suffixTree = new SuffixTree(word);
