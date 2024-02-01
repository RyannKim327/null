class RedBlackNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.parent = null;
    this.color = RedBlackNode.RED; // Start with red color
  }

  // Check if node is red
  isRed() {
    return this.color === RedBlackNode.RED;
  }

  // Get grandparent of the node
  grandparent() {
    if (this.parent === null || this.parent.parent === null) {
      return null;
    }
    return this.parent.parent;
  }

  // Get sibling of the node
  sibling() {
    if (this.parent === null) {
      return null;
    }
    return this === this.parent.left ? this.parent.right : this.parent.left;
  }

  // Get uncle of the node
  uncle() {
    const grandparent = this.grandparent();
    if (grandparent === null) {
      return null;
    }
    return this.parent === grandparent.left ? grandparent.right : grandparent.left;
  }
}

RedBlackNode.RED = Symbol("red");
RedBlackNode.BLACK = Symbol("black");

class RedBlackTree {
  constructor() {
    this.root = null;
  }

  // Insert a value into the tree
  insert(value) {
    const newNode = new RedBlackNode(value);

    // Perform a normal BST insert
    this.bstInsert(newNode);

    // Fix Red-Black Tree violations
    this.fixViolations(newNode);

    // Root node should always be black
    this.root.color = RedBlackNode.BLACK;
  }

  bstInsert(node) {
    let current = this.root;
    let parent = null;

    while (current !== null) {
      parent = current;
      if (node.value < current.value) {
        current = current.left;
      } else {
        current = current.right;
      }
    }

    node.parent = parent;
    if (parent === null) {
      this.root = node; // Tree was empty
    } else if (node.value < parent.value) {
      parent.left = node;
    } else {
      parent.right = node;
    }
  }

  fixViolations(node) {
    while (node !== this.root && node.parent.isRed()) {
      const parent = node.parent;
      const grandparent = node.grandparent();
      const uncle = node.uncle();

      if (uncle !== null && uncle.isRed()) {
        // Case 1: Uncle is red, re-color
        parent.color = RedBlackNode.BLACK;
        uncle.color = RedBlackNode.BLACK;
        grandparent.color = RedBlackNode.RED;
        node = grandparent;
      } else {
        if (node === parent.right && parent === grandparent.left) {
          // Case 2: Left rotation needed
          this.rotateLeft(parent);
          node = parent;
          parent = node.parent;
        } else if (node === parent.left && parent === grandparent.right) {
          // Case 3: Right rotation needed
          this.rotateRight(parent);
          node = parent;
          parent = node.parent;
        }

        // Case 4: Recolor and rotate
        parent.color = RedBlackNode.BLACK;
        grandparent.color = RedBlackNode.RED;
        if (node === parent.left && parent === grandparent.left) {
          this.rotateRight(grandparent);
        } else {
          this.rotateLeft(grandparent);
        }
      }
    }
  }

  // Left rotation around a node
  rotateLeft(node) {
    const temp = node.right;
    node.right = temp.left;

    if (temp.left !== null) {
      temp.left.parent = node;
    }

    temp.parent = node.parent;

    if (node.parent === null) {
      this.root = temp;
    } else if (node === node.parent.left) {
      node.parent.left = temp;
    } else {
      node.parent.right = temp;
    }

    temp.left = node;
    node.parent = temp;
  }

  // Right rotation around a node
  rotateRight(node) {
    const temp = node.left;
    node.left = temp.right;

    if (temp.right !== null) {
      temp.right.parent = node;
    }

    temp.parent = node.parent;

    if (node.parent === null) {
      this.root = temp;
    } else if (node === node.parent.right) {
      node.parent.right = temp;
    } else {
      node.parent.left = temp;
    }

    temp.right = node;
    node.parent = temp;
  }

  // Helper function to recursively print the tree
  printHelper(current, indent, last) {
    if (current !== null) {
      process.stdout.write(indent);
      if (last) {
        process.stdout.write("R----");
        indent += "     ";
      } else {
        process.stdout.write("L----");
        indent += "|    ";
      }

      const color = current.color === RedBlackNode.RED ? "RED" : "BLACK";
      console.log(`${current.value} (${color})`);

      this.printHelper(current.left, indent, false);
      this.printHelper(current.right, indent, true);
    }
  }

  // Print the tree to the console
  print() {
    if (this.root !== null) {
      this.printHelper(this.root, "", true);
    }
  }
}
const tree = new RedBlackTree();
tree.insert(10);
tree.insert(20);
tree.insert(30);
tree.insert(40);
tree.insert(50);
tree.insert(60);
tree.insert(70);

tree.print();
R----40 (BLACK)
     L----20 (BLACK)
     |    L----10 (BLACK)
     |    R----30 (BLACK)
     R----60 (BLACK)
          L----50 (BLACK)
          R----70 (BLACK)
