enum Color {
  RED,
  BLACK,
}

class Node<T> {
  value: T;
  color: Color;
  left: Node<T> | null = null;
  right: Node<T> | null = null;
  parent: Node<T> | null = null;

  constructor(value: T, color: Color) {
    this.value = value;
    this.color = color;
  }
}

class RedBlackTree<T> {
  private root: Node<T> | null = null;

  private rotateLeft(x: Node<T>) {
    const y = x.right!;
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

  private rotateRight(y: Node<T>) {
    const x = y.left!;
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

  insert(value: T) {
    let node = new Node(value, Color.RED);
    let y: Node<T> | null = null;
    let x = this.root;

    // BST insert
    while (x !== null) {
      y = x;
      if (node.value < x.value) {
        x = x.left;
      } else {
        x = x.right;
      }
    }
    node.parent = y;

    if (y === null) {
      this.root = node;
    } else if (node.value < y.value) {
      y.left = node;
    } else {
      y.right = node;
    }

    this.fixInsert(node);
  }

  private fixInsert(k: Node<T>) {
    let current = k;
    while (current.parent && current.parent.color === Color.RED) {
      if (current.parent === current.parent.parent?.left) {
        let uncle = current.parent.parent.right;
        if (uncle && uncle.color === Color.RED) {
          // Case 1: Uncle red
          current.parent.color = Color.BLACK;
          uncle.color = Color.BLACK;
          current.parent.parent.color = Color.RED;
          current = current.parent.parent;
        } else {
          if (current === current.parent.right) {
            // Case 2: current is right child
            current = current.parent;
            this.rotateLeft(current);
          }
          // Case 3: current is left child
          current.parent!.color = Color.BLACK;
          current.parent!.parent!.color = Color.RED;
          this.rotateRight(current.parent!.parent!);
        }
      } else {
        // Symmetric cases with left and right swapped
        let uncle = current.parent.parent?.left;
        if (uncle && uncle.color === Color.RED) {
          current.parent.color = Color.BLACK;
          uncle.color = Color.BLACK;
          current.parent.parent!.color = Color.RED;
          current = current.parent.parent!;
        } else {
          if (current === current.parent.left) {
            current = current.parent;
            this.rotateRight(current);
          }
          current.parent!.color = Color.BLACK;
          current.parent!.parent!.color = Color.RED;
          this.rotateLeft(current.parent!.parent!);
        }
      }
    }

    this.root!.color = Color.BLACK;
  }

  // Optional: method to print or traverse tree for testing
  inorderTraversal(node: Node<T> | null = this.root) {
    if (!node) return;
    this.inorderTraversal(node.left);
    console.log(`${node.value} (${node.color === Color.RED ? 'R' : 'B'})`);
    this.inorderTraversal(node.right);
  }
}
const rbt = new RedBlackTree<number>();
[10, 20, 30, 15, 25, 5].forEach(num => rbt.insert(num));
rbt.inorderTraversal();
