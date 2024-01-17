class Node {
  constructor(key) {
    this.key = key;
    this.color = "RED";
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
    this.insertNode(newNode);
    this.insertFixup(newNode);
  }

  insertNode(node) {
    let current = this.root;
    let parent = null;

    while (current) {
      parent = current;
      if (node.key < current.key) {
        current = current.left;
      } else {
        current = current.right;
      }
    }

    node.parent = parent;

    if (!parent) {
      this.root = node;
    } else if (node.key < parent.key) {
      parent.left = node;
    } else {
      parent.right = node;
    }
  }

  insertFixup(node) {
    while (node.parent && node.parent.color === "RED") {
      if (node.parent === node.parent.parent.left) {
        const uncle = node.parent.parent.right;

        if (uncle && uncle.color === "RED") {
          node.parent.color = "BLACK";
          uncle.color = "BLACK";
          node.parent.parent.color = "RED";
          node = node.parent.parent;
        } else {
          if (node === node.parent.right) {
            node = node.parent;
            this.leftRotate(node);
          }
          node.parent.color = "BLACK";
          node.parent.parent.color = "RED";
          this.rightRotate(node.parent.parent);
        }
      } else {
        const uncle = node.parent.parent.left;

        if (uncle && uncle.color === "RED") {
          node.parent.color = "BLACK";
          uncle.color = "BLACK";
          node.parent.parent.color = "RED";
          node = node.parent.parent;
        } else {
          if (node === node.parent.left) {
            node = node.parent;
            this.rightRotate(node);
          }
          node.parent.color = "BLACK";
          node.parent.parent.color = "RED";
          this.leftRotate(node.parent.parent);
        }
      }
    }

    this.root.color = "BLACK";
  }

  delete(key) {
    const node = this.searchNode(this.root, key);
    if (!node) return;

    const replacement =
      (node.left && node.right)
        ? this.successor(node)
        : node.left || node.right;

    if (!replacement) {
      if (node.color === "BLACK") {
        this.deleteFixup(node);
      }
      if (!node.parent) {
        this.root = null;
      } else if (node.parent.left === node) {
        node.parent.left = null;
      } else {
        node.parent.right = null;
      }
    } else {
      if (!node.left || !node.right) {
        this.replaceNode(node, replacement);
        if (node.color === "BLACK" && replacement.color === "RED") {
          replacement.color = "BLACK";
        } else if (node.color === "RED" && replacement.color === "BLACK") {
          replacement.color = "RED";
        }
      } else {
        const successor = this.successor(node);
        node.key = successor.key;
        this.delete(successor.key);
      }
    }
  }

  deleteFixup(node) {
    while (node !== this.root && node.color === "BLACK") {
      if (node === node.parent.left) {
        let sibling = node.parent.right;
        if (sibling.color === "RED") {
          sibling.color = "BLACK";
          node.parent.color = "RED";
          this.leftRotate(node.parent);
          sibling = node.parent.right;
        }
        if (
          sibling.left.color === "BLACK" &&
          sibling.right.color === "BLACK"
        ) {
          sibling.color = "RED";
          node = node.parent;
        } else {
          if (sibling.right.color === "BLACK") {
            sibling.left.color = "BLACK";
            sibling.color = "RED";
            this.rightRotate(sibling);
            sibling = node.parent.right;
          }
          sibling.color = node.parent.color;
          node.parent.color = "BLACK";
          sibling.right.color = "BLACK";
          this.leftRotate(node.parent);
          node = this.root;
        }
      } else {
        let sibling = node.parent.left;
        if (sibling.color === "RED") {
          sibling.color = "BLACK";
          node.parent.color = "RED";
          this.rightRotate(node.parent);
          sibling = node.parent.left;
        }
        if (
          sibling.left.color === "BLACK" &&
          sibling.right.color === "BLACK"
        ) {
          sibling.color = "RED";
          node = node.parent;
        } else {
          if (sibling.left.color === "BLACK") {
            sibling.right.color = "BLACK";
            sibling.color = "RED";
            this.leftRotate(sibling);
            sibling = node.parent.left;
          }
          sibling.color = node.parent.color;
          node.parent.color = "BLACK";
          sibling.left.color = "BLACK";
          this.rightRotate(node.parent);
          node = this.root;
        }
      }
    }

    node.color = "BLACK";
  }

  search(key) {
    const node = this.searchNode(this.root, key);
    return node ? node.key : null;
  }

  searchNode(current, key) {
    if (!current || current.key === key) {
      return current;
    }

    if (key < current.key) {
      return this.searchNode(current.left, key);
    } else {
      return this.searchNode(current.right, key);
    }
  }

  minimum() {
    if (!this.root) return null;
    let current = this.root;
    while (current.left) {
      current = current.left;
    }
    return current.key;
  }

  maximum() {
    if (!this.root) return null;
    let current = this.root;
    while (current.right) {
      current = current.right;
    }
    return current.key;
  }

  leftRotate(node) {
    const child = node.right;
    node.right = child.left;
    if (child.left) {
      child.left.parent = node;
    }
    child.parent = node.parent;
    if (!node.parent) {
      this.root = child;
    } else if (node === node.parent.left) {
      node.parent.left = child;
    } else {
      node.parent.right = child;
    }
    child.left = node;
    node.parent = child;
  }

  rightRotate(node) {
    const child = node.left;
    node.left = child.right;
    if (child.right) {
      child.right.parent = node;
    }
    child.parent = node.parent;
    if (!node.parent) {
      this.root = child;
    } else if (node === node.parent.right) {
      node.parent.right = child;
    } else {
      node.parent.left = child;
    }
    child.right = node;
    node.parent = child;
  }

  successor(node) {
    if (node.right) {
      let current = node.right;
      while (current.left) {
        current = current.left;
      }
      return current;
    } else {
      let current = node;
      while (current.parent && current.parent.right === current) {
        current = current.parent;
      }
      return current.parent;
    }
  }

  replaceNode(node, replacement) {
    if (node.parent) {
      if (node.parent.left === node) {
        node.parent.left = replacement;
      } else {
        node.parent.right = replacement;
      }
    } else {
      this.root = replacement;
    }
    if (replacement) {
      replacement.parent = node.parent;
    }
  }
}

// Example usage:

const rbTree = new RedBlackTree();

rbTree.insert(10);
rbTree.insert(20);
rbTree.insert(30);
rbTree.insert(40);
rbTree.insert(50);

console.log(rbTree.search(30)); // 30
console.log(rbTree.minimum()); // 10
console.log(rbTree.maximum()); // 50

rbTree.delete(30);

console.log(rbTree.search(30)); // null
console.log(rbTree.minimum()); // 10
console.log(rbTree.maximum()); // 50
