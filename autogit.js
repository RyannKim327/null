class TreeNode {
  constructor(key) {
    this.key = key;
    this.left = null;
    this.right = null;
    this.height = 1;
  }
}
class AVLTree {
  constructor() {
    this.root = null;
  }

  // Calculate the height of a node
  getHeight(node) {
    if (node === null) return 0;
    return node.height;
  }

  // Update the height of a node
  updateHeight(node) {
    node.height = 1 + Math.max(this.getHeight(node.left), this.getHeight(node.right));
  }

  // Get the balance factor of a node
  getBalanceFactor(node) {
    if (node === null) return 0;
    return this.getHeight(node.left) - this.getHeight(node.right);
  }

  // Perform a right rotation at the given node
  rotateRight(z) {
    const y = z.left;
    const T3 = y.right;

    y.right = z;
    z.left = T3;

    this.updateHeight(z);
    this.updateHeight(y);

    return y;
  }

  // Perform a left rotation at the given node
  rotateLeft(z) {
    const y = z.right;
    const T2 = y.left;

    y.left = z;
    z.right = T2;

    this.updateHeight(z);
    this.updateHeight(y);

    return y;
  }

  // Insert a key into the tree
  insert(key) {
    this.root = this.insertNode(this.root, key);
  }

  // Insert a key recursively
  insertNode(root, key) {
    // Perform the normal BST insertion
    if (root === null) return new TreeNode(key);
    if (key < root.key) root.left = this.insertNode(root.left, key);
    else if (key > root.key) root.right = this.insertNode(root.right, key);
    else return root; // Duplicate keys not allowed

    // Update height of ancestor node
    this.updateHeight(root);

    // Check the balance factor and perform rotations if needed
    const balanceFactor = this.getBalanceFactor(root);

    // Left Left Case
    if (balanceFactor > 1 && key < root.left.key) {
      return this.rotateRight(root);
    }

    // Right Right Case
    if (balanceFactor < -1 && key > root.right.key) {
      return this.rotateLeft(root);
    }

    // Left Right Case
    if (balanceFactor > 1 && key > root.left.key) {
      root.left = this.rotateLeft(root.left);
      return this.rotateRight(root);
    }

    // Right Left Case
    if (balanceFactor < -1 && key < root.right.key) {
      root.right = this.rotateRight(root.right);
      return this.rotateLeft(root);
    }

    return root;
  }

  // Traverse the tree in-order
  inOrderTraversal(node = this.root) {
    if (node === null) return [];

    const result = [];
    result.push(...this.inOrderTraversal(node.left));
    result.push(node.key);
    result.push(...this.inOrderTraversal(node.right));

    return result;
  }
}
const avlTree = new AVLTree();

avlTree.insert(10);
avlTree.insert(20);
avlTree.insert(30);
avlTree.insert(40);
avlTree.insert(50);
avlTree.insert(25);

console.log(avlTree.inOrderTraversal()); // [10, 20, 25, 30, 40, 50]
