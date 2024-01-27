class Node {
  constructor() {
    this.children = {};
  }
}
class SuffixTree {
  constructor() {
    this.root = new Node();
  }

  // Function to add a string to the suffix tree
  addString(str) {
    for (let i = 0; i < str.length; i++) {
      let currentNode = this.root;
      for (let j = i; j < str.length; j++) {
        const ch = str.charAt(j);
        if (!currentNode.children[ch]) {
          currentNode.children[ch] = new Node();
        }
        currentNode = currentNode.children[ch];
      }
    }
  }

  // Function to search for a string in the suffix tree
  searchString(str) {
    let currentNode = this.root;
    for (let i = 0; i < str.length; i++) {
      const ch = str.charAt(i);
      if (!currentNode.children[ch]) {
        return false;
      }
      currentNode = currentNode.children[ch];
    }
    return true;
  }
}
const suffixTree = new SuffixTree();
suffixTree.addString("banana");
console.log(suffixTree.searchString("ana")); // true
console.log(suffixTree.searchString("apple")); // false
