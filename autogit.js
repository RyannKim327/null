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

  // Helper function to get the height of a node
  getNodeHeight(node) {
    if (node === null) {
      return 0;
    }
    return node.height;
  }

  // Helper function to calculate the balance factor of a node
  getBalanceFactor(node) {
    if (node === null) {
      return 0;
    }
    return this.getNodeHeight(node.left) - this.getNodeHeight(node.right);
  }

  // Helper function to update the height of a node
  updateNodeHeight(node) {
    if (node === null) {
      return;
    }
    node.height = 1 + Math.max(this.getNodeHeight(node.left), this.getNodeHeight(node.right));
  }

  // Helper function to perform a right rotation on a node
  rotateRight(node) {
    const newRoot = node.left;
    const temp = newRoot.right;

    newRoot.right = node;
    node.left = temp;

    this.updateNodeHeight(node);
    this.updateNodeHeight(newRoot);

    return newRoot;
  }

  // Helper function to perform a left rotation on a node
  rotateLeft(node) {
    const newRoot = node.right;
    const temp = newRoot.left;

    newRoot.left = node;
    node.right = temp;

    this.updateNodeHeight(node);
    this.updateNodeHeight(newRoot);

    return newRoot;
  }

  // Helper function to balance a node
  balanceNode(node) {
    if (node === null) {
      return node;
    }

    this.updateNodeHeight(node);

    const balanceFactor = this.getBalanceFactor(node);

    if (balanceFactor > 1) {
      if (this.getBalanceFactor(node.left) < 0) {
        node.left = this.rotateLeft(node.left);
      }
      return this.rotateRight(node);
    }
    if (balanceFactor < -1) {
      if (this.getBalanceFactor(node.right) > 0) {
        node.right = this.rotateRight(node.right);
      }
      return this.rotateLeft(node);
    }

    return node;
  }

  // Public function to insert a value into the AVL tree
  insert(value) {
    this.root = this.insertNode(this.root, value);
  }

  // Helper function to insert a value into the AVL tree
  insertNode(node, value) {
    if (node === null) {
      return new Node(value);
    }

    if (value < node.value) {
      node.left = this.insertNode(node.left, value);
    } else {
      node.right = this.insertNode(node.right, value);
    }

    return this.balanceNode(node);
  }

  // Public function to remove a value from the AVL tree
  remove(value) {
    this.root = this.removeNode(this.root, value);
  }

  // Helper function to remove a value from the AVL tree
  removeNode(node, value) {
    if (node === null) {
      return node;
    }

    if (value < node.value) {
      node.left = this.removeNode(node.left, value);
    } else if (value > node.value) {
      node.right = this.removeNode(node.right, value);
    } else {
      if (node.left === null && node.right === null) {
        node = null;
      } else if (node.left === null || node.right === null) {
        node = node.left || node.right;
      } else {
        const minValue = this.findMinValue(node.right);
        node.value = minValue;
        node.right = this.removeNode(node.right, minValue);
      }
    }

    return this.balanceNode(node);
  }

  // Helper function to find the minimum value in a subtree
  findMinValue(node) {
    while (node.left !== null) {
      node = node.left;
    }
    return node.value;
  }

  // Public function to search for a value in the AVL tree
  search(value) {
    return this.searchNode(this.root, value);
  }

  // Helper function to search for a value in the AVL tree
  searchNode(node, value) {
    if (node === null || node.value === value) {
      return node;
    }

    if (value < node.value) {
      return this.searchNode(node.left, value);
    }
    return this.searchNode(node.right, value);
  }
}
const avlTree = new AVLTree();
avlTree.insert(5);
avlTree.insert(3);
avlTree.insert(7);
avlTree.insert(2);
avlTree.insert(4);
avlTree.insert(6);
avlTree.insert(8);
avlTree.remove(7);

console.log(avlTree.search(4)); // Output: Node { value: 4, left: null, right: null, height: 2 }
console.log(avlTree.search(7)); // Output: null (since it was removed)
