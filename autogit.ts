enum Color {
  RED,
  BLACK,
}

class Node<T> {
  data: T;
  color: Color;
  left: Node<T> | null;
  right: Node<T> | null;
  parent: Node<T> | null;

  constructor(data: T) {
    this.data = data;
    this.color = Color.RED;  // New nodes start as red
    this.left = null;
    this.right = null;
    this.parent = null;
  }
}

class RedBlackTree<T> {
  private root: Node<T> | null = null;

  // Public insert method
  insert(data: T) {
    const newNode = new Node(data);
    this.root = this.insertBST(this.root, newNode);
    this.fixInsert(newNode);
  }

  // Normal BST insert
  private insertBST(root: Node<T> | null, node: Node<T>): Node<T> {
    if (root === null) return node;

    if (node.data < root.data) {
      root.left = this.insertBST(root.left, node);
      if (root.left) root.left.parent = root;
    } else {
      root.right = this.insertBST(root.right, node);
      if (root.right) root.right.parent = root;
    }
    return root;
  }

  // Fix red-black tree properties after insert
  private fixInsert(node: Node<T>): void {
    let current = node;

    while (
      current !== this.root &&
      current.parent !== null &&
      current.parent.color === Color.RED
    ) {
      const parent = current.parent;
      const grandparent = parent.parent;

      if (!grandparent) break;

      if (parent === grandparent.left) {
        const uncle = grandparent.right;

        // Case 1: Uncle is red -> recolor
        if (uncle && uncle.color === Color.RED) {
          parent.color = Color.BLACK;
          uncle.color = Color.BLACK;
          grandparent.color = Color.RED;
          current = grandparent;
        } else {
          // Case 2 & 3: Uncle is black
          if (current === parent.right) {
            this.leftRotate(parent);
            current = parent;
          }
          this.rightRotate(grandparent);
          parent.color = Color.BLACK;
          grandparent.color = Color.RED;
          break;
        }
      } else {
        // Symmetric cases if parent is right child
        const uncle = grandparent.left;

        if (uncle && uncle.color === Color.RED) {
          parent.color = Color.BLACK;
          uncle.color = Color.BLACK;
          grandparent.color = Color.RED;
          current = grandparent;
        } else {
          if (current === parent.left) {
            this.rightRotate(parent);
            current = parent;
          }
          this.leftRotate(grandparent);
          parent.color = Color.BLACK;
          grandparent.color = Color.RED;
          break;
        }
      }
    }
    if (this.root) this.root.color = Color.BLACK;
  }

  private leftRotate(x: Node<T>): void {
    const y = x.right;
    if (!y) return;

    x.right = y.left;
    if (y.left !== null) y.left.parent = x;

    y.parent = x.parent;

    if (x.parent === null) {
      this.root = y;
    } else if (x === x.parent.left) {
      x.parent.left = y;
    } else {
      x.parent.right = y;
    }

    y.left = x;
    x.parent = y;
  }

  private rightRotate(y: Node<T>): void {
    const x = y.left;
    if (!x) return;

    y.left = x.right;
    if (x.right !== null) x.right.parent = y;

    x.parent = y.parent;

    if (y.parent === null) {
      this.root = x;
    } else if (y === y.parent.right) {
      y.parent.right = x;
    } else {
      y.parent.left = x;
    }

    x.right = y;
    y.parent = x;
  }

  // Utility method to print tree in-order (for checking)
  inOrderTraversal(node: Node<T> | null = this.root): void {
    if (node !== null) {
      this.inOrderTraversal(node.left);
      console.log(
        node.data,
        node.color === Color.RED ? "RED" : "BLACK",
        node.parent ? node.parent.data : null
      );
      this.inOrderTraversal(node.right);
    }
  }
}

// Example usage:
const tree = new RedBlackTree<number>();
tree.insert(10);
tree.insert(20);
tree.insert(30);
tree.insert(15);
tree.inOrderTraversal();
