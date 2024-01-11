class Node {
  constructor() {
    this.children = {};
    // Add any other required properties
  }
}
class SuffixTree {
  constructor(text) {
    this.root = new Node();
    this.text = text;
    this.buildSuffixTree();
  }
  
  buildSuffixTree() {
    // Implement the logic to build the suffix tree here
  }
  
  // Implement other required methods here
}
buildSuffixTree() {
  const len = this.text.length;
  for (let i = 0; i < len; i++) {
    this.addSuffix(this.text.substring(i));
  }
}

addSuffix(suffix) {
  let currentNode = this.root;
  for (let i = 0; i < suffix.length; i++) {
    const currentChar = suffix[i];
    if (!currentNode.children[currentChar]) {
      currentNode.children[currentChar] = new Node();
    }
    currentNode = currentNode.children[currentChar];
  }
  // Store any metadata or flags at the last character node of the suffix
}
