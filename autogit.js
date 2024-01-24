class Node {
  constructor(key, color, left = null, right = null, parent = null) {
    this.key = key;
    this.color = color;
    this.left = left;
    this.right = right;
    this.parent = parent;
  }
}

class RedBlackTree {
  constructor() {
    this.root = null;
  }

  insert(key) {
    const newNode = new Node(key, "red");

    if (!this.root) {
      this.root = newNode;
    } else {
      let current = this.root;
      while (current) {
        if (newNode.key < current.key) {
          if (!current.left) {
            current.left = newNode;
            newNode.parent = current;
            break;
          }
          current = current.left;
        } else if (newNode.key > current.key) {
          if (!current.right) {
            current.right = newNode;
            newNode.parent = current;
            break;
          }
          current = current.right;
        } else {
          // Duplicate keys are not allowed in a red-black tree.
          return;
        }
      }
      this.fixTreeAfterInsert(newNode);
    }

    // Make sure the root is black.
    this.root.color = "black";
  }

  fixTreeAfterInsert(node) {
    while (
      node.parent &&
      node.parent.color === "red" &&
      node.color === "red"
    ) {
      const grandparent = node.parent.parent;
      if (node.parent === grandparent.left) {
        const uncle = grandparent.right;

        if (uncle && uncle.color === "red") {
          // Case 1: Uncle is red
          node.parent.color = "black";
          uncle.color = "black";
          grandparent.color = "red";
          node = grandparent;
        } else {
          if (node === node.parent.right) {
            // Case 2: Uncle is black and node is to the right
            node = node.parent;
            this.rotateLeft(node);
          }

          // Case 3: Uncle is black and node is to the left
          node.parent.color = "black";
          grandparent.color = "red";
          this.rotateRight(grandparent);
        }
      } else {
        const uncle = grandparent.left;

        if (uncle && uncle.color === "red") {
          // Case 1: Uncle is red
          node.parent.color = "black";
          uncle.color = "black";
          grandparent.color = "red";
          node = grandparent;
        } else {
          if (node === node.parent.left) {
            // Case 2: Uncle is black and node is to the left
            node = node.parent;
            this.rotateRight(node);
          }

          // Case 3: Uncle is black and node is to the right
          node.parent.color = "black";
          grandparent.color = "red";
          this.rotateLeft(grandparent);
        }
      }
    }
  }

  rotateLeft(node) {
    const child = node.right;

    node.right = child.left;
    if (child.left) {
      child.left.parent = node;
    }
    child.parent = node.parent;

    if (!node.parent) {
      this.root = child;
    } else {
      if (node === node.parent.left) {
        node.parent.left = child;
      } else {
        node.parent.right = child;
      }
    }

    child.left = node;
    node.parent = child;
  }

  rotateRight(node) {
    const child = node.left;

    node.left = child.right;
    if (child.right) {
      child.right.parent = node;
    }
    child.parent = node.parent;

    if (!node.parent) {
      this.root = child;
    } else {
      if (node === node.parent.right) {
        node.parent.right = child;
      } else {
        node.parent.left = child;
      }
    }

    child.right = node;
    node.parent = child;
  }

  search(key) {
    let current = this.root;

    while (current) {
      if (key === current.key) {
        return current;
      }
      if (key < current.key) {
        current = current.left;
      } else {
        current = current.right;
      }
    }

    return null; // Key not found
  }

  delete(key) {
    const nodeToDelete = this.search(key);

    if (!nodeToDelete) {
      return;
    }

    this.remove(nodeToDelete);
  }

  remove(node) {
    if (node.left && node.right) {
      const successor = this.findSuccessor(node);
      node.key = successor.key;
      this.remove(successor);
    } else if (node.color === "red") {
      this.restructureTree(node);
      this.removeSingleNode(node);
    } else {
      this.removeSingleNode(node);
      this.restructureTree(node.parent);
    }
  }

  findSuccessor(node) {
    let current = node.right;
    while (current.left) {
      current = current.left;
    }
    return current;
  }

  removeSingleNode(node) {
    const child = node.left || node.right;

    if (!node.parent) {
      this.root = child;
      if (child) {
        child.parent = null;
      }
    } else {
      if (node === node.parent.left) {
        node.parent.left = child;
      } else {
        node.parent.right = child;
      }

      if (child) {
        child.parent = node.parent;
      }
    }

    node = null;
  }

  restructureTree(node) {
    if (node === this.root) {
      return;
    }

    const sibling = this.getSibling(node);

    if (sibling.color === "red") {
      node.parent.color = "red";
      sibling.color = "black";

      if (node === node.parent.left) {
        this.rotateLeft(node.parent);
      } else {
        this.rotateRight(node.parent);
      }
    }

    if (
      node.parent.color === "black" &&
      sibling.color === "black" &&
      (!sibling.left || sibling.left.color === "black") &&
      (!sibling.right || sibling.right.color === "black")
    ) {
      sibling.color = "red";
      this.restructureTree(node.parent);
    } else if (
      node.parent.color === "red" &&
      sibling.color === "black" &&
      (!sibling.left || sibling.left.color === "black") &&
      (!sibling.right || sibling.right.color === "black")
    ) {
      sibling.color = "red";
      node.parent.color = "black";
    } else {
      if (node === node.parent.left && sibling.color === "black") {
        if (
          sibling.left &&
          sibling.left.color === "red" &&
          (!sibling.right || sibling.right.color === "black")
        ) {
          sibling.color = "red";
          sibling.left.color = "black";
          this.rotateRight(sibling);
        } else {
          sibling.right.color = "black";
          sibling.color = "red";
          this.rotateLeft(node.parent);
          this.restructureTree(node);
        }
      } else if (node === node.parent.right && sibling.color === "black") {
        if (
          sibling.right &&
          sibling.right.color === "red" &&
          (!sibling.left || sibling.left.color === "black")
        ) {
          sibling.color = "red";
          sibling.right.color = "black";
          this.rotateLeft(sibling);
        } else {
          sibling.left.color = "black";
          sibling.color = "red";
          this.rotateRight(node.parent);
          this.restructureTree(node);
        }
      }
    }
  }

  getSibling(node) {
    if (!node.parent) {
      return null;
    }

    if (node === node.parent.left) {
      return node.parent.right;
    }

    return node.parent.left;
  }
}
