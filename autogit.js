class SuffixTreeNode {
  constructor() {
    this.children = {};
  }
}

class SuffixTree {
  constructor() {
    this.root = new SuffixTreeNode();
  }

  // Function to add a string to the suffix tree
  addString(str) {
    for (let i = 0; i < str.length; i++) {
      this.addSuffix(str.substring(i));
    }
  }

  // Function to add a suffix to the suffix tree
  addSuffix(suffix) {
    let currentNode = this.root;
    for (let i = 0; i < suffix.length; i++) {
      const char = suffix[i];
      if (!(char in currentNode.children)) {
        currentNode.children[char] = new SuffixTreeNode();
      }
      currentNode = currentNode.children[char];
    }
  }

  // Function to check if a string exists in the suffix tree
  searchString(str) {
    let currentNode = this.root;
    for (let i = 0; i < str.length; i++) {
      const char = str[i];
      if (!(char in currentNode.children)) {
        return false;
      }
      currentNode = currentNode.children[char];
    }
    return true;
  }
}

// Example usage:
const suffixTree = new SuffixTree();
suffixTree.addString("banana");
suffixTree.addString("apple");
suffixTree.addString("orange");

console.log(suffixTree.searchString("banana")); // Output: true
console.log(suffixTree.searchString("app")); // Output: false
console.log(suffixTree.searchString("or")); // Output: true
