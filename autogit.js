class Node {
  constructor(data) {
    this.data = data;
    this.height = 1;
    this.left = null;
    this.right = null;
  }
}

class AVLTree {
  constructor() {
    this.root = null;
  }

  // Get the height of a node
  getHeight(node) {
    if (!node) return 0;
    return node.height;
  }

  // Get the balance factor of a node
  getBalanceFactor(node) {
    if (!node) return 0;
    return this.getHeight(node.left) - this.getHeight(node.right);
  }

  // Update the height of a node
  updateHeight(node) {
    if (!node) return;
    node.height = Math.max(this.getHeight(node.left), this.getHeight(node.right)) + 1;
  }

  // Rotate the subtree rooted with the given node to the right
  rotateRight(y) {
    const x = y.left;
    const T2 = x.right;

    // Perform rotation
    x.right = y;
    y.left = T2;

    // Update heights
    this.updateHeight(y);
    this.updateHeight(x);

    return x; // New root
  }

  // Rotate the subtree rooted with the given node to the left
  rotateLeft(x) {
    const y = x.right;
    const T2 = y.left;

    // Perform rotation
    y.left = x;
    x.right = T2;

    // Update heights
    this.updateHeight(x);
    this.updateHeight(y);

    return y; // New root
  }

  // Insert a new node into the AVL tree
  insert(data) {
    this.root = this.insertNode(this.root, data);
  }

  insertNode(root, data) {
    // Perform the normal BST insertion
    if (!root) return new Node(data);
    if (data < root.data) root.left = this.insertNode(root.left, data);
    else if (data > root.data) root.right = this.insertNode(root.right, data);
    else return root; // Duplicate keys not allowed

    // Update the height of the ancestor node
    this.updateHeight(root);

    // Check the balance factor and rebalance if needed
    const balanceFactor = this.getBalanceFactor(root);

    // Left Left Case
    if (balanceFactor > 1 && data < root.left.data) {
      return this.rotateRight(root);
    }

    // Right Right Case
    if (balanceFactor < -1 && data > root.right.data) {
      return this.rotateLeft(root);
    }

    // Left Right Case
    if (balanceFactor > 1 && data > root.left.data) {
      root.left = this.rotateLeft(root.left);
      return this.rotateRight(root);
    }

    // Right Left Case
    if (balanceFactor < -1 && data < root.right.data) {
      root.right = this.rotateRight(root.right);
      return this.rotateLeft(root);
    }

    // Return the (unchanged) node
    return root;
  }

  // Perform a recursive inorder traversal of the AVL tree
  inOrderTraversal(node) {
    if (!node) return [];
    const result = [];
    result.push(...this.inOrderTraversal(node.left));
    result.push(node.data);
    result.push(...this.inOrderTraversal(node.right));
    return result;
  }

  // Print the AVL tree
  print() {
    console.log(this.inOrderTraversal(this.root));
  }
}

// Usage example
const avlTree = new AVLTree();
avlTree.insert(10);
avlTree.insert(20);
avlTree.insert(30);
avlTree.insert(40);
avlTree.insert(50);
avlTree.insert(25);

avlTree.print();
