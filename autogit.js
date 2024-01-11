class Node {
  constructor() {
    this.edges = {}; // Incoming edges
    this.children = {}; // Child nodes
  }
}
class SuffixTree {
  constructor() {
    this.root = new Node(); // The root node of the tree
  }

  // Implement other methods here
}
insert(string) {
  for (let i = 0; i < string.length; i++) {
    let currentNode = this.root;
    const suffix = string.substring(i);
    for (let j = 0; j < suffix.length; j++) {
      const char = suffix.charAt(j);

      if (!currentNode.edges[char]) {
        // If edge doesn't exist, create a new node and add the edge
        const newNode = new Node();
        currentNode.edges[char] = newNode;
        currentNode.children[char] = newNode;
      }

      currentNode = currentNode.edges[char];
    }
  }
}
search(pattern) {
  let currentNode = this.root;
  for (let i = 0; i < pattern.length; i++) {
    const char = pattern.charAt(i);
    if (currentNode.edges[char]) {
      currentNode = currentNode.edges[char];
    } else {
      return false; // Pattern not found
    }
  }
  return true; // Pattern found
}
const suffixTree = new SuffixTree();
suffixTree.insert("banana");
suffixTree.insert("apple");
console.log(suffixTree.search("banana")); // Output: true
console.log(suffixTree.search("apple")); // Output: true
console.log(suffixTree.search("orange")); // Output: false
