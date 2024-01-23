class Node {
  constructor(start, end) {
    this.start = start;
    this.end = end;
    this.children = {};
  }
}

class SuffixTree {
  constructor(input) {
    this.root = new Node(-1, -1); // Create a dummy root node
    this.input = input;
    this.buildTree();
  }

  buildTree() {
    const n = this.input.length;
    for (let i = 0; i < n; i++) {
      this.addSuffix(i);
    }
  }

  addSuffix(start) {
    let currentNode = this.root;
    for (let i = start; i < this.input.length; i++) {
      const currentChar = this.input[i];
      if (!currentNode.children[currentChar]) {
        currentNode.children[currentChar] = new Node(start, i);
        return;
      }
      currentNode = currentNode.children[currentChar];
    }
  }

  // Add other necessary methods for search and traversal

  // Example: search for a substring in the suffix tree
  search(substring) {
    let currentNode = this.root;
    let i = 0;
    while (i < substring.length) {
      const currentChar = substring[i];
      if (!currentNode.children[currentChar]) {
        return false;
      }
      currentNode = currentNode.children[currentChar];
      const j = currentNode.start;
      while (i < substring.length && j <= currentNode.end) {
        if (substring[i] !== this.input[j]) {
          return false;
        }
        i++;
        j++;
      }
    }
    return true;
  }
}

// Usage:
const suffixTree = new SuffixTree('banana');
console.log(suffixTree.search('ana')); // Output: true
console.log(suffixTree.search('xyz')); // Output: false
