class Node {
  constructor() {
    this.edges = new Map(); // Map of edges {character: Node}
    // Additional properties for node implementation
  }
}

class SuffixTree {
  constructor() {
    this.root = new Node();
  }

  // Function to add a suffix to the tree
  addSuffix(suffix) {
    let currentNode = this.root;

    for (let i = 0; i < suffix.length; i++) {
      const character = suffix[i];

      if (!currentNode.edges.has(character)) {
        const newNode = new Node();
        currentNode.edges.set(character, newNode);
      }

      currentNode = currentNode.edges.get(character);
    }
  }

  // Function to build the suffix tree
  build(text) {
    for (let i = 0; i < text.length; i++) {
      const suffix = text.slice(i);
      this.addSuffix(suffix);
    }
  }
}

// Example usage
const suffixTree = new SuffixTree();
suffixTree.build("banana");

// Now you can perform various operations on the suffix tree
