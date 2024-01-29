class Node {
  constructor(start, end) {
    this.start = start;
    this.end = end;
    this.children = {}; // object to store children nodes
  }
}
class SuffixTree {
  constructor() {
    this.root = new Node(-1, -1); // initialize with an empty root node
    this.text = ''; // store the original string
  }

  insert(suffix) {
    let current = this.root;
    for (let i = 0; i < suffix.length; i++) {
      const char = suffix[i];
      if (!current.children[char]) {
        // create a new node if the character does not exist
        current.children[char] = new Node(i, suffix.length - 1);
      }
      current = current.children[char];
    }
  }

  build(text) {
    this.text = text;
    for (let i = 0; i < text.length; i++) {
      const suffix = text.slice(i);
      this.insert(suffix);
    }
  }

  // Implement other necessary methods
  // ...
}
const suffixTree = new SuffixTree();
const text = 'banana';
suffixTree.build(text);
