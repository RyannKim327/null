enum Color {
  RED,
  BLACK,
}

class Node<T> {
  value: T;
  color: Color;
  left: Node<T> | null;
  right: Node<T> | null;
  parent: Node<T> | null;

  constructor(value: T) {
    this.value = value;
    this.color = Color.RED;
    this.left = null;
    this.right = null;
    this.parent = null;
  }
}
class RedBlackTree<T> {
  root: Node<T> | null = null;

  // Utility to do left rotate
  private rotateLeft(x: Node<T>): void {
    const y = x.right!;
    x.right = y.left;
    if (y.left !== null) {
      y.left.parent = x;
    }
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

  // Utility to do right rotate
  private rotateRight(y: Node<T>): void {
    const x = y.left!;
    y.left = x.right;
    if (x.right !== null) {
      x.right.parent = y;
    }
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

  // Fix the tree after an insertion
  private fixInsertion(z: Node<T>): void {
    while (z.parent && z.parent.color === Color.RED) {
      if (z.parent === z.parent.parent?.left) {
        const y = z.parent.parent.right; // uncle
        if (y && y.color === Color.RED) {
          // Case 1
          z.parent.color = Color.BLACK;
          y.color = Color.BLACK;
          z.parent.parent.color = Color.RED;
          z = z.parent.parent;
        } else {
          if (z === z.parent.right) {
            // Case 2
            z = z.parent;
            this.rotateLeft(z);
          }
          // Case 3
          z.parent!.color = Color.BLACK;
          z.parent!.parent!.color = Color.RED;
          this.rotateRight(z.parent!.parent!);
        }
      } else {
        // Mirror case: parent is right child
        const y = z.parent.parent?.left; // uncle
        if (y && y.color === Color.RED) {
          // Case 1
          z.parent.color = Color.BLACK;
          y.color = Color.BLACK;
          z.parent.parent!.color = Color.RED;
          z = z.parent.parent!;
        } else {
          if (z === z.parent.left) {
            // Case 2
            z = z.parent;
            this.rotateRight(z);
          }
          // Case 3
          z.parent!.color = Color.BLACK;
          z.parent!.parent!.color = Color.RED;
          this.rotateLeft(z.parent!.parent!);
        }
      }
    }
    this.root!.color = Color.BLACK;
  }

  insert(value: T): void {
    let y: Node<T> | null = null;
    let x = this.root;

    const z = new Node(value);

    // BST insert
    while (x !== null) {
      y = x;
      if (value < x.value) {
        x = x.left;
      } else {
        x = x.right;
      }
    }
    z.parent = y;

    if (y === null) {
      this.root = z;
    } else if (value < y.value) {
      y.left = z;
    } else {
      y.right = z;
    }

    z.left = null;
    z.right = null;
    z.color = Color.RED;

    this.fixInsertion(z);
  }

  // (Optional) Inorder traversal function to check tree state
  inorderTraversal(node: Node<T> | null = this.root, result: T[] = []): T[] {
    if (node !== null) {
      this.inorderTraversal(node.left, result);
      result.push(node.value);
      this.inorderTraversal(node.right, result);
    }
    return result;
  }
}
const rbTree = new RedBlackTree<number>();

rbTree.insert(10);
rbTree.insert(20);
rbTree.insert(15);
rbTree.insert(30);
rbTree.insert(25);

console.log(rbTree.inorderTraversal()); // [10, 15, 20, 25, 30]
