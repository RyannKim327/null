// Red-Black Tree Node
class Node {
  constructor(key, color) {
    this.key = key;
    this.left = null;
    this.right = null;
    this.parent = null;
    this.color = color;
  }
}

// Red-Black Tree
class RedBlackTree {
  constructor() {
    this.root = null;
  }

  // Insert a new node
  insert(key) {
    const node = new Node(key, "red");
    if (!this.root) {
      this.root = node;
    } else {
      let current = this.root;
      while (current) {
        if (key < current.key) {
          if (!current.left) {
            current.left = node;
            node.parent = current;
            break;
          }
          current = current.left;
        } else {
          if (!current.right) {
            current.right = node;
            node.parent = current;
            break;
          }
          current = current.right;
        }
      }
      this.fixInsertion(node);
    }
  }

  // Fix the tree after insertion
  fixInsertion(node) {
    while (node.parent && node.parent.color === "red") {
      if (node.parent === node.parent.parent.left) {
        let uncle = node.parent.parent.right;
        if (uncle && uncle.color === "red") {
          node.parent.color = "black";
          uncle.color = "black";
          node.parent.parent.color = "red";
          node = node.parent.parent;
        } else {
          if (node === node.parent.right) {
            node = node.parent;
            this.rotateLeft(node);
          }
          node.parent.color = "black";
          node.parent.parent.color = "red";
          this.rotateRight(node.parent.parent);
        }
      } else {
        let uncle = node.parent.parent.left;
        if (uncle && uncle.color === "red") {
          node.parent.color = "black";
          uncle.color = "black";
          node.parent.parent.color = "red";
          node = node.parent.parent;
        } else {
          if (node === node.parent.left) {
            node = node.parent;
            this.rotateRight(node);
          }
          node.parent.color = "black";
          node.parent.parent.color = "red";
          this.rotateLeft(node.parent.parent);
        }
      }
    }
    this.root.color = "black";
  }

  // Left rotation
  rotateLeft(node) {
    let temp = node.right;
    node.right = temp.left;
    if (temp.left) {
      temp.left.parent = node;
    }
    temp.parent = node.parent;
    if (!node.parent) {
      this.root = temp;
    } else if (node === node.parent.left) {
      node.parent.left = temp;
    } else {
      node.parent.right = temp;
    }
    temp.left = node;
    node.parent = temp;
  }

  // Right rotation
  rotateRight(node) {
    let temp = node.left;
    node.left = temp.right;
    if (temp.right) {
      temp.right.parent = node;
    }
    temp.parent = node.parent;
    if (!node.parent) {
      this.root = temp;
    } else if (node === node.parent.right) {
      node.parent.right = temp;
    } else {
      node.parent.left = temp;
    }
    temp.right = node;
    node.parent = temp;
  }

  // Print the tree in-order
  printInOrder(node = this.root) {
    if (node) {
      this.printInOrder(node.left);
      console.log(node.key);
      this.printInOrder(node.right);
    }
  }
}

// Example usage
const rbTree = new RedBlackTree();
rbTree.insert(10);
rbTree.insert(5);
rbTree.insert(15);
rbTree.insert(3);
rbTree.insert(8);
rbTree.insert(12);
rbTree.insert(17);

rbTree.printInOrder();
