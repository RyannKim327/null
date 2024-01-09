class Node {
  constructor(key) {
    this.key = key;
    this.color = 'red'; // Initially set the color of all nodes to red
    this.left = null;
    this.right = null;
    this.parent = null;
  }
}
class RedBlackTree {
  constructor() {
    this.root = null;
  }

  insert(key) {
    const newNode = new Node(key);

    if (this.root === null) {
      // If the tree is empty, make the new node the root and color it black
      newNode.color = 'black';
      this.root = newNode;
    } else {
      let currentNode = this.root;

      while (currentNode !== null) {
        if (key < currentNode.key) {
          // If the key is less, go to the left child
          if (currentNode.left === null) {
            currentNode.left = newNode;
            newNode.parent = currentNode;
            break;
          }
          currentNode = currentNode.left;
        } else {
          // If the key is greater or equal, go to the right child
          if (currentNode.right === null) {
            currentNode.right = newNode;
            newNode.parent = currentNode;
            break;
          }
          currentNode = currentNode.right;
        }
      }

      // After insertion, fix the tree to maintain red-black properties
      this.fixTreeAfterInsertion(newNode);
    }
  }

  fixTreeAfterInsertion(node) {
    while (
      node !== this.root &&
      node.parent.color === 'red' &&
      node.color !== 'black'
    ) {
      const parent = node.parent;
      const grandparent = parent.parent;

      if (parent === grandparent.left) {
        const uncle = grandparent.right;

        if (uncle !== null && uncle.color === 'red') {
          parent.color = 'black';
          uncle.color = 'black';
          grandparent.color = 'red';
          node = grandparent;
        } else {
          if (node === parent.right) {
            this.rotateLeft(parent);
            node = parent;
            parent = node.parent;
          }

          parent.color = 'black';
          grandparent.color = 'red';
          this.rotateRight(grandparent);
        }
      } else {
        const uncle = grandparent.left;

        if (uncle !== null && uncle.color === 'red') {
          parent.color = 'black';
          uncle.color = 'black';
          grandparent.color = 'red';
          node = grandparent;
        } else {
          if (node === parent.left) {
            this.rotateRight(parent);
            node = parent;
            parent = node.parent;
          }

          parent.color = 'black';
          grandparent.color = 'red';
          this.rotateLeft(grandparent);
        }
      }
    }

    this.root.color = 'black'; // Ensure the root is always black
  }

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
}
const tree = new RedBlackTree();
tree.insert(10);
tree.insert(5);
tree.insert(15);
tree.insert(3);
tree.insert(7);
