class Node {
    constructor(value, color) {
        this.value = value;
        this.left = null;
        this.right = null;
        this.parent = null;
        this.color = color; // 0 for black, 1 for red
    }
}

class RedBlackTree {
    constructor() {
        this.root = null;
    }

    // Helper method to insert a new node in the tree
    insert(value) {
        const newNode = new Node(value, 1); // New nodes are always red
        if (this.root === null) {
            this.root = newNode;
            this.root.color = 0; // Node becomes black when it's the root
        } else {
            this.insertNode(this.root, newNode);
        }
    }

    insertNode(node, newNode) {
        if (newNode.value < node.value) {
            if (node.left === null) {
                node.left = newNode;
                newNode.parent = node;
            } else {
                this.insertNode(node.left, newNode);
            }
        } else {
            if (node.right === null) {
                node.right = newNode;
                newNode.parent = node;
            } else {
                this.insertNode(node.right, newNode);
            }
        }

        this.fixTree(newNode);
    }

    // Fix the tree to maintain red-black properties
    fixTree(node) {
      while (node !== this.root && node.color === 1 && node.parent.color === 1) {
          let parent = node.parent;
          let grandparent = parent.parent;

          if (parent === grandparent.left) {
              let uncle = grandparent.right;

              if (uncle !== null && uncle.color === 1) {
                  grandparent.color = 1;
                  parent.color = 0;
                  uncle.color = 0;
                  node = grandparent;
              } else {
                  if (node === parent.right) {
                      this.rotateLeft(parent);
                      node = parent;
                      parent = node.parent;
                  }

                  this.rotateRight(grandparent);
                  const color = parent.color;
                  parent.color = grandparent.color;
                  grandparent.color = color;
                  node = parent;
              }
          } else {
              let uncle = grandparent.left;

              if (uncle !== null && uncle.color === 1) {
                  grandparent.color = 1;
                  parent.color = 0;
                  uncle.color = 0;
                  node = grandparent;
              } else {
                  if (node === parent.left) {
                      this.rotateRight(parent);
                      node = parent;
                      parent = node.parent;
                  }

                  this.rotateLeft(grandparent);
                  const color = parent.color;
                  parent.color = grandparent.color;
                  grandparent.color = color;
                  node = parent;
              }
          }
      }
      this.root.color = 0;
    }

    // Left rotate the tree
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

    // Right rotate the tree
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
