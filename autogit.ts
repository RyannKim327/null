enum Color {
  RED,
  BLACK,
}

class RBNode<T> {
  value: T;
  color: Color;
  left: RBNode<T> | null = null;
  right: RBNode<T> | null = null;
  parent: RBNode<T> | null = null;

  constructor(value: T, color: Color) {
    this.value = value;
    this.color = color;
  }
}
class RBTree<T> {
  root: RBNode<T> | null = null;

  private rotateLeft(x: RBNode<T>) { ... }
  private rotateRight(y: RBNode<T>) { ... }
  private fixInsertion(z: RBNode<T>) { ... }
  insert(value: T) { ... }
}
enum Color {
  RED,
  BLACK,
}

class RBNode<T> {
  value: T;
  color: Color;
  left: RBNode<T> | null = null;
  right: RBNode<T> | null = null;
  parent: RBNode<T> | null = null;

  constructor(value: T, color: Color) {
    this.value = value;
    this.color = color;
  }
}

class RBTree<T> {
  root: RBNode<T> | null = null;

  private rotateLeft(x: RBNode<T>) {
    const y = x.right!;
    x.right = y.left;
    if (y.left) {
      y.left.parent = x;
    }
    y.parent = x.parent;
    if (!x.parent) {
      this.root = y;
    } else if (x === x.parent.left) {
      x.parent.left = y;
    } else {
      x.parent.right = y;
    }
    y.left = x;
    x.parent = y;
  }

  private rotateRight(y: RBNode<T>) {
    const x = y.left!;
    y.left = x.right;
    if (x.right) {
      x.right.parent = y;
    }
    x.parent = y.parent;
    if (!y.parent) {
      this.root = x;
    } else if (y === y.parent.right) {
      y.parent.right = x;
    } else {
      y.parent.left = x;
    }
    x.right = y;
    y.parent = x;
  }

  private fixInsertion(z: RBNode<T>) {
    while (z.parent && z.parent.color === Color.RED) {
      const p = z.parent;
      const gp = p.parent!;
      if (p === gp.left) {
        const uncle = gp.right;
        if (uncle && uncle.color === Color.RED) {
          // Case 1: recolor
          p.color = Color.BLACK;
          uncle.color = Color.BLACK;
          gp.color = Color.RED;
          z = gp;
        } else {
          if (z === p.right) {
            // Case 2: rotate left
            z = p;
            this.rotateLeft(z);
          }
          // Case 3: rotate right
          p.color = Color.BLACK;
          gp.color = Color.RED;
          this.rotateRight(gp);
        }
      } else {
        // Mirror image cases for when parent is right child
        const uncle = gp.left;
        if (uncle && uncle.color === Color.RED) {
          p.color = Color.BLACK;
          uncle.color = Color.BLACK;
          gp.color = Color.RED;
          z = gp;
        } else {
          if (z === p.left) {
            z = p;
            this.rotateRight(z);
          }
          p.color = Color.BLACK;
          gp.color = Color.RED;
          this.rotateLeft(gp);
        }
      }
    }
    if (this.root) {
      this.root.color = Color.BLACK;
    }
  }

  insert(value: T) {
    let y: RBNode<T> | null = null;
    let x = this.root;

    // Standard BST insert
    while (x !== null) {
      y = x;
      if (value < x.value) {
        x = x.left;
      } else if (value > x.value) {
        x = x.right;
      } else {
        // Duplicate value, do nothing or handle duplicates as needed
        return;
      }
    }

    const z = new RBNode(value, Color.RED);
    z.parent = y;

    if (y === null) {
      this.root = z; // Tree was empty
    } else if (value < y.value) {
      y.left = z;
    } else {
      y.right = z;
    }

    this.fixInsertion(z);
  }

  // Utility: Inorder traversal
  inorder(node: RBNode<T> | null = this.root, result: T[] = []): T[] {
    if (node !== null) {
      this.inorder(node.left, result);
      result.push(node.value);
      this.inorder(node.right, result);
    }
    return result;
  }
}
const tree = new RBTree<number>();
tree.insert(10);
tree.insert(20);
tree.insert(30);
tree.insert(15);

console.log(tree.inorder()); // [10, 15, 20, 30]
