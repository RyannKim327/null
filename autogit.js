// Define a Node class for red-black tree
class Node {
  constructor(value, color) {
    this.value = value;
    this.color = color;
    this.left = null;
    this.right = null;
    this.parent = null;
  }
}

// Define the RedBlackTree class
class RedBlackTree {
  constructor() {
    this.root = null;
  }

  // Insert a value into the tree
  insert(value) {
    const newNode = new Node(value, 'red');
    if (this.root === null) {
      this.root = newNode;
    } else {
      let currNode = this.root;
      while (currNode) {
        if (value < currNode.value) {
          if (currNode.left === null) {
            currNode.left = newNode;
            newNode.parent = currNode;
            break;
          }
          currNode = currNode.left;
        } else if (value > currNode.value) {
          if (currNode.right === null) {
            currNode.right = newNode;
            newNode.parent = currNode;
            break;
          }
          currNode = currNode.right;
        } else {
          // Value already exists in the tree
          return;
        }
      }
    }

    // Fix tree violations
    this.fixTree(newNode);
  }

  // Restore the red-black tree properties after insertion
  fixTree(node) {
    while (
      node.parent !== null &&
      node.parent.color === 'red' &&
      node.color !== 'black'
    ) {
      const parent = node.parent;
      const grandParent = node.parent.parent;

      if (parent === grandParent.left) {
        const uncle = grandParent.right;
        if (uncle !== null && uncle.color === 'red') {
          // Case 1: Recoloring
          parent.color = 'black';
          uncle.color = 'black';
          grandParent.color = 'red';
          node = grandParent;
        } else {
          if (node === parent.right) {
            // Case 2: Left rotation
            this.rotateLeft(parent);
            node = parent;
            parent = node.parent;
          }

          // Case 3: Right rotation
          this.rotateRight(grandParent);
          parent.color = 'black';
          grandParent.color = 'red';
          node = parent;
        }
      } else {
        const uncle = grandParent.left;
        if (uncle !== null && uncle.color === 'red') {
          // Case 1: Recoloring
          parent.color = 'black';
          uncle.color = 'black';
          grandParent.color = 'red';
          node = grandParent;
        } else {
          if (node === parent.left) {
            // Case 2: Right rotation
            this.rotateRight(parent);
            node = parent;
            parent = node.parent;
          }

          // Case 3: Left rotation
          this.rotateLeft(grandParent);
          parent.color = 'black';
          grandParent.color = 'red';
          node = parent;
        }
      }
    }

    // Root node should always be black
    this.root.color = 'black';
  }

  // Left rotation
  rotateLeft(node) {
    const rightChild = node.right;
    node.right = rightChild.left;
    if (rightChild.left !== null) {
      rightChild.left.parent = node;
    }
    rightChild.parent = node.parent;
    if (node.parent === null) {
      this.root = rightChild;
    } else if (node === node.parent.left) {
      node.parent.left = rightChild;
    } else {
      node.parent.right = rightChild;
    }
    rightChild.left = node;
    node.parent = rightChild;
  }

  // Right rotation
  rotateRight(node) {
    const leftChild = node.left;
    node.left = leftChild.right;
    if (leftChild.right !== null) {
      leftChild.right.parent = node;
    }
    leftChild.parent = node.parent;
    if (node.parent === null) {
      this.root = leftChild;
    } else if (node === node.parent.right) {
      node.parent.right = leftChild;
    } else {
      node.parent.left = leftChild;
    }
    leftChild.right = node;
    node.parent = leftChild;
  }

  // Search for a value in the tree
  search(value) {
    let currNode = this.root;
    while (currNode !== null) {
      if (value === currNode.value) {
        return currNode;
      } else if (value < currNode.value) {
        currNode = currNode.left;
      } else {
        currNode = currNode.right;
      }
    }
    return null;
  }
}

// Usage:
const rbTree = new RedBlackTree();
rbTree.insert(10);
rbTree.insert(5);
rbTree.insert(20);
rbTree.insert(7);
rbTree.insert(3);

console.log(rbTree.search(5)); // Output: Node object { value: 5, color: 'black', ... }
