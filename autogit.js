class Node {
  constructor(key, value, color) {
    this.key = key;
    this.value = value;
    this.color = color;
    this.left = null;
    this.right = null;
    this.parent = null;
  }
}

class RedBlackTree {
  constructor() {
    this.root = null;
  }

  insert(key, value) {
    const newNode = new Node(key, value, 'red');
    if (this.root === null) {
      this.root = newNode;
    } else {
      let current = this.root;
      while (true) {
        if (key < current.key) {
          if (current.left === null) {
            current.left = newNode;
            newNode.parent = current;
            break;
          } else {
            current = current.left;
          }
        } else if (key > current.key) {
          if (current.right === null) {
            current.right = newNode;
            newNode.parent = current;
            break;
          } else {
            current = current.right;
          }
        } else { // if key already exists, update the value
          current.value = value;
          return;
        }
      }
      this.balanceTreeAfterInsert(newNode);
    }
  }

  balanceTreeAfterInsert(node) {
    while (node !== this.root && node.parent.color === 'red') {
      if (node.parent === node.parent.parent.left) {
        const uncle = node.parent.parent.right;
        if (uncle !== null && uncle.color === 'red') {
          node.parent.color = 'black';
          uncle.color = 'black';
          node.parent.parent.color = 'red';
          node = node.parent.parent;
        } else {
          if (node === node.parent.right) {
            node = node.parent;
            this.rotateLeft(node);
          }
          node.parent.color = 'black';
          node.parent.parent.color = 'red';
          this.rotateRight(node.parent.parent);
        }
      } else {
        const uncle = node.parent.parent.left;
        if (uncle !== null && uncle.color === 'red') {
          node.parent.color = 'black';
          uncle.color = 'black';
          node.parent.parent.color = 'red';
          node = node.parent.parent;
        } else {
          if (node === node.parent.left) {
            node = node.parent;
            this.rotateRight(node);
          }
          node.parent.color = 'black';
          node.parent.parent.color = 'red';
          this.rotateLeft(node.parent.parent);
        }
      }
    }
    this.root.color = 'black';
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
    } else if (node === node.parent.left) {
      node.parent.left = leftChild;
    } else {
      node.parent.right = leftChild;
    }
    leftChild.right = node;
    node.parent = leftChild;
  }

  search(key) {
    let current = this.root;
    while (current !== null) {
      if (key < current.key) {
        current = current.left;
      } else if (key > current.key) {
        current = current.right;
      } else {
        return current.value;
      }
    }
    return null;
  }
}
const tree = new RedBlackTree();
tree.insert(10, 'A');
tree.insert(20, 'B');
tree.insert(30, 'C');

console.log(tree.search(20)); // Output: B
