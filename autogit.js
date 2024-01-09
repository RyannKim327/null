class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.height = 1;
  }
}
class AVLTree {
  constructor() {
    this.root = null;
  }

  // Helper function to calculate the height of a node
  getHeight(node) {
    if (node === null) {
      return 0;
    }
    return node.height;
  }

  // Helper function to update the height of a node
  updateHeight(node) {
    node.height =
      Math.max(this.getHeight(node.left), this.getHeight(node.right)) + 1;
  }

  // Helper function to calculate the balance factor of a node
  getBalanceFactor(node) {
    if (node === null) {
      return 0;
    }
    return this.getHeight(node.left) - this.getHeight(node.right);
  }

  // Helper function to perform a right rotation
  rotateRight(z) {
    const y = z.left;
    const T3 = y.right;

    y.right = z;
    z.left = T3;

    this.updateHeight(z);
    this.updateHeight(y);

    return y;
  }

  // Helper function to perform a left rotation
  rotateLeft(z) {
    const y = z.right;
    const T2 = y.left;

    y.left = z;
    z.right = T2;

    this.updateHeight(z);
    this.updateHeight(y);

    return y;
  }

  // Helper function to balance the tree starting from the given node
  balance(node) {
    this.updateHeight(node);

    if (this.getBalanceFactor(node) > 1) {
      if (this.getBalanceFactor(node.left) < 0) {
        node.left = this.rotateLeft(node.left);
      }
      return this.rotateRight(node);
    }
    if (this.getBalanceFactor(node) < -1) {
      if (this.getBalanceFactor(node.right) > 0) {
        node.right = this.rotateRight(node.right);
      }
      return this.rotateLeft(node);
    }

    return node;
  }

  // Insert a value into the AVL tree
  insert(value) {
    this.root = this._insert(this.root, value);
  }

  // Internal helper function to insert a value recursively
  _insert(node, value) {
    if (node === null) {
      return new Node(value);
    }

    if (value < node.value) {
      node.left = this._insert(node.left, value);
    } else if (value > node.value) {
      node.right = this._insert(node.right, value);
    } else {
      return node; // Duplicate values are not allowed
    }

    return this.balance(node);
  }

  // Remove a value from the AVL tree
  remove(value) {
    this.root = this._remove(this.root, value);
  }

  // Internal helper function to remove a value recursively
  _remove(node, value) {
    if (node === null) {
      return null;
    }

    if (value < node.value) {
      node.left = this._remove(node.left, value);
    } else if (value > node.value) {
      node.right = this._remove(node.right, value);
    } else {
      if (node.left === null || node.right === null) {
        const child = node.left || node.right;
        return child;
      } else {
        const successor = this.findMin(node.right);
        node.value = successor.value;
        node.right = this._remove(node.right, successor.value);
      }
    }

    return this.balance(node);
  }

  // Find the node with the minimum value
  findMin(node) {
    let current = node;
    while (current.left !== null) {
      current = current.left;
    }
    return current;
  }

  // In-order traversal of the AVL tree
  inOrder(node = this.root) {
    if (node === null) {
      return [];
    }

    return [...this.inOrder(node.left), node.value, ...this.inOrder(node.right)];
  }

  // Pre-order traversal of the AVL tree
  preOrder(node = this.root) {
    if (node === null) {
      return [];
    }

    return [node.value, ...this.preOrder(node.left), ...this.preOrder(node.right)];
  }

  // Post-order traversal of the AVL tree
  postOrder(node = this.root) {
    if (node === null) {
      return [];
    }

    return [...this.postOrder(node.left), ...this.postOrder(node.right), node.value];
  }
}
const avlTree = new AVLTree();

avlTree.insert(5);
avlTree.insert(10);
avlTree.insert(3);
avlTree.insert(7);
avlTree.insert(8);
avlTree.insert(1);

console.log(avlTree.inOrder()); // [1, 3, 5, 7, 8, 10]

avlTree.remove(7);

console.log(avlTree.inOrder()); // [1, 3, 5, 8, 10]
