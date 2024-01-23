class AVLTree {
  constructor() {
    this.root = null;
  }

  // Define other methods here...
}
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.height = 1;
  }
}
// Create an AVLTree instance
const avlTree = new AVLTree();

// Insert values into the tree
avlTree.insert(10);
avlTree.insert(20);
avlTree.insert(30);

// Perform other operations as needed
