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

  // Get the height of a node
  getHeight(node) {
    if (node === null) return 0;
    return node.height;
  }

  // Update the height of a node
  updateHeight(node) {
    node.height = Math.max(this.getHeight(node.left), this.getHeight(node.right)) + 1;
  }

  // Get the balance factor of a node
  balanceFactor(node) {
    if (node === null) return 0;
    return this.getHeight(node.left) - this.getHeight(node.right);
  }

  // Perform left rotation on a node
  leftRotate(node) {
    const newRoot = node.right;
    node.right = newRoot.left;
    newRoot.left = node;

    this.updateHeight(node);
    this.updateHeight(newRoot);

    return newRoot;
  }

  // Perform right rotation on a node
  rightRotate(node) {
    const newRoot = node.left;
    node.left = newRoot.right;
    newRoot.right = node;

    this.updateHeight(node);
    this.updateHeight(newRoot);

    return newRoot;
  }

  // Balance a subtree
  balance(node) {
    if (this.balanceFactor(node) > 1) {
      if (this.balanceFactor(node.left) < 0) {
        node.left = this.leftRotate(node.left);
      }
      return this.rightRotate(node);
    }

    if (this.balanceFactor(node) < -1) {
      if (this.balanceFactor(node.right) > 0) {
        node.right = this.rightRotate(node.right);
      }
      return this.leftRotate(node);
    }

    return node;
  }

  // Insert a value into the tree
  insert(value) {
    this.root = this.insertRecursive(this.root, value);
  }

  insertRecursive(node, value) {
    if (node === null) {
      return new Node(value);
    }

    if (value < node.value) {
      node.left = this.insertRecursive(node.left, value);
    } else if (value > node.value) {
      node.right = this.insertRecursive(node.right, value);
    } else {
      return node; // Value already exists
    }

    this.updateHeight(node); // Update the height of the node

    return this.balance(node); // Balance the node
  }

  // Remove a value from the tree
  remove(value) {
    this.root = this.removeRecursive(this.root, value);
  }

  removeRecursive(node, value) {
    if (node === null) {
      return null;
    }

    if (value < node.value) {
      node.left = this.removeRecursive(node.left, value);
    } else if (value > node.value) {
      node.right = this.removeRecursive(node.right, value);
    } else {
      // Node found
      if (node.left === null && node.right === null) {
        return null; // Leaf node
      } else if (node.left === null) {
        return node.right; // Only right child
      } else if (node.right === null) {
        return node.left; // Only left child
      } else {
        const minNode = this.findMinNode(node.right);
        node.value = minNode.value;
        node.right = this.removeRecursive(node.right, minNode.value);
      }
    }

    this.updateHeight(node); // Update the height of the node

    return this.balance(node); // Balance the node
  }

  // Find the minimum node
  findMinNode(node) {
    if (node.left === null) {
      return node;
    }
    return this.findMinNode(node.left);
  }

  // Search for a value in the tree
  search(value) {
    return this.searchRecursive(this.root, value);
  }

  searchRecursive(node, value) {
    if (node === null) {
      return false;
    }

    if (value === node.value) {
      return true;
    }

    if (value < node.value) {
      return this.searchRecursive(node.left, value);
    } else {
      return this.searchRecursive(node.right, value);
    }
  }

  // Perform in-order traversal of the tree
  inOrderTraversal() {
    this.inOrderRecursive(this.root);
  }

  inOrderRecursive(node) {
    if (node !== null) {
      this.inOrderRecursive(node.left);
      console.log(node.value);
      this.inOrderRecursive(node.right);
    }
  }
}
const avlTree = new AVLTree();
avlTree.insert(42);
avlTree.insert(23);
avlTree.insert(9);
avlTree.insert(50);

avlTree.inOrderTraversal(); // Prints: 9, 23, 42, 50

avlTree.remove(23);

avlTree.inOrderTraversal(); // Prints: 9, 42, 50

console.log(avlTree.search(42)); // true
console.log(avlTree.search(23)); // false
