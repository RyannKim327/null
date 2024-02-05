class Node {
  constructor(label, parent) {
    this.label = label;
    this.children = {};
    this.parent = parent;
  }
}
class SuffixTree {
  constructor() {
    this.root = new Node(null, null);
    this.text = null;
    this.activeNode = this.root;
    this.activeEdge = null;
    this.activeLength = 0;
    this.remainingSuffixes = 0;
    this.end = -1;
  }
  
  build(text) {
    this.text = text;
    this.remainingSuffixes = text.length;
    for(let i = 0; i < text.length; i++) {
      this.extendSuffixTree(i);
    }
  }
  
  extendSuffixTree(pos) {
    this.end = pos;
    this.remainingSuffixes++;
    let lastCreatedInternalNode = null;
    
    while(this.remainingSuffixes > 0) {
      if (this.activeLength === 0) {
        this.activeEdge = pos;
      }
      
      if (this.activeNode.children[this.text[this.activeEdge]] === undefined) {
        this.activeNode.children[this.text[this.activeEdge]] = new Node(pos, this.activeNode);
        
        if (lastCreatedInternalNode !== null) {
          lastCreatedInternalNode.suffixLink = this.activeNode;
          lastCreatedInternalNode = null;
        }
      } else {
        const nextNode = this.activeNode.children[this.text[this.activeEdge]];
        if (this.canonizeEdge(nextNode)) {
          continue;
        }
        
        if (this.text[nextNode.label.start + this.activeLength] === this.text[pos]) {
          if(lastCreatedInternalNode !== null && this.activeNode !== this.root) {
            lastCreatedInternalNode.suffixLink = this.activeNode;
            lastCreatedInternalNode = null;
          }
          this.activeLength++;
          break;
        }
        
        const splitNode = new Node(nextNode.label.start, nextNode.label.start + this.activeLength - 1);
        this.activeNode.children[this.text[this.activeEdge]] = splitNode;
        
        const leafNode = new Node(pos, splitNode);
        splitNode.children[this.text[pos]] = leafNode;
        
        nextNode.label.start += this.activeLength;
        splitNode.children[this.text[nextNode.label.start]] = nextNode;
        
        if (lastCreatedInternalNode !== null) {
          lastCreatedInternalNode.suffixLink = splitNode;
        }
        
        lastCreatedInternalNode = splitNode;
      }
      
      this.remainingSuffixes--;
      if (this.activeNode === this.root && this.activeLength > 0) {
        this.activeLength--;
        this.activeEdge = pos - this.remainingSuffixes + 1;
      } else if (this.activeNode !== this.root) {
        this.activeNode = this.activeNode.suffixLink || this.root;
      }
    }
  }
  
  canonizeEdge(node) {
    if (this.activeLength >= node.label.length) {
      this.activeEdge += node.label.length;
      this.activeLength -= node.label.length;
      this.activeNode = node;
      return true;
    }
    return false;
  }
}
const suffixTree = new SuffixTree();
const text = "banana";
suffixTree.build(text);
console.log(suffixTree.root); // Display the suffix tree root node
