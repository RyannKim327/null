class Node {
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

  // Insert a node into the tree
  insert(key) {
    this.root = this.insertNode(this.root, key);
  }

  // Recursive function to insert a node
  insertNode(node, key) {
    if (node === null) {
      return new Node(key);
    }

    if (key < node.key) {
      node.left = this.insertNode(node.left, key);
    } else if (key > node.key) {
      node.right = this.insertNode(node.right, key);
    } else {
      // Duplicate keys are not allowed in AVL tree
      return node;
    }

    node.height = 1 + Math.max(this.getHeight(node.left), this.getHeight(node.right));

    const balanceFactor = this.getBalanceFactor(node);

    if (balanceFactor > 1) {
      // Left rotation cases
      if (key < node.left.key) {
        return this.rotateRight(node);
      }
      // Left Right rotation case
      if (key > node.left.key) {
        node.left = this.rotateLeft(node.left);
        return this.rotateRight(node);
      }
    }

    if (balanceFactor < -1) {
      // Right rotation cases
      if (key > node.right.key) {
        return this.rotateLeft(node);
      }
      // Right Left rotation case
      if (key < node.right.key) {
        node.right = this.rotateRight(node.right);
        return this.rotateLeft(node);
      }
    }

    return node;
  }

  // Delete a node from the tree
  delete(key) {
    this.root = this.deleteNode(this.root, key);
  }

  // Recursive function to delete a node
  deleteNode(node, key) {
    if (node === null) {
      return node;
    }

    if (key < node.key) {
      node.left = this.deleteNode(node.left, key);
    } else if (key > node.key) {
      node.right = this.deleteNode(node.right, key);
    } else {
      // Node found, perform deletion
      if (node.left === null && node.right === null) {
        // Case 1: Node has no children
        node = null;
      } else if (node.left === null || node.right === null) {
        // Case 2: Node has one child
        node = node.left || node.right;
      } else {
        // Case 3: Node has two children
        const minRight = this.findMinNode(node.right);
        node.key = minRight.key;
        node.right = this.deleteNode(node.right, minRight.key);
      }
    }

    if (node === null) {
      return node;
    }

    node.height = 1 + Math.max(this.getHeight(node.left), this.getHeight(node.right));

    const balanceFactor = this.getBalanceFactor(node);

    if (balanceFactor > 1) {
      // Left rotation cases
      if (this.getBalanceFactor(node.left) >= 0) {
        return this.rotateRight(node);
      }
      node.left = this.rotateLeft(node.left);
      return this.rotateRight(node);
    }

    if (balanceFactor < -1) {
      // Right rotation cases
      if (this.getBalanceFactor(node.right) <= 0) {
        return this.rotateLeft(node);
      }
      node.right = this.rotateRight(node.right);
      return this.rotateLeft(node);
    }

    return node;
  }

  // Perform a left rotation on a node
  rotateLeft(node) {
    const newRoot = node.right;
    node.right = newRoot.left;
    newRoot.left = node;
    node.height = 1 + Math.max(this.getHeight(node.left), this.getHeight(node.right));
    newRoot.height = 1 + Math.max(this.getHeight(newRoot.left), this.getHeight(newRoot.right));
    return newRoot;
  }

  // Perform a right rotation on a node
  rotateRight(node) {
    const newRoot = node.left;
    node.left = newRoot.right;
    newRoot.right = node;
    node.height = 1 + Math.max(this.getHeight(node.left), this.getHeight(node.right));
    newRoot.height = 1 + Math.max(this.getHeight(newRoot.left), this.getHeight(newRoot.right));
    return newRoot;
  }

  // Get the height of a node
  getHeight(node) {
    return node ? node.height : 0;
  }

  // Get the balance factor of a node
  getBalanceFactor(node) {
    return node ? this.getHeight(node.left) - this.getHeight(node.right) : 0;
  }

  // Find the node with minimum key
  findMinNode(node) {
    while (node && node.left !== null) {
      node = node.left;
    }
    return node;
  }

  // Inorder traversal of the tree
  inOrderTraversal(node) {
    if (node !== null) {
      this.inOrderTraversal(node.left);
      console.log(node.key);
      this.inOrderTraversal(node.right);
    }
  }
}
const avlTree = new AVLTree();
avlTree.insert(10);
avlTree.insert(20);
avlTree.insert(30);
avlTree.delete(20);
avlTree.inOrderTraversal(avlTree.root);
