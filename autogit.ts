enum Color {
  RED = 'RED',
  BLACK = 'BLACK',
}

class Node<T> {
  value: T;
  color: Color;
  left: Node<T> | null = null;
  right: Node<T> | null = null;
  parent: Node<T> | null = null;

  constructor(value: T, color: Color = Color.RED){
    this.value = value;
    this.color = color;
  }
}
class RedBlackTree<T> {
  root: Node<T> | null = null;

  // Left Rotation
  private rotateLeft(x: Node<T>) {
    const y = x.right!;
    x.right = y.left;
    if (y.left) y.left.parent = x;
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

  // Right Rotation
  private rotateRight(y: Node<T>) {
    const x = y.left!;
    y.left = x.right;
    if (x.right) x.right.parent = y;
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

  // Insert method
  insert(value: T) {
    let newNode = new Node(value);
    if (!this.root) {
      newNode.color = Color.BLACK; // Root is always black
      this.root = newNode;
      return;
    }

    let current = this.root;
    let parent: Node<T> | null = null;

    while (current) {
      parent = current;
      if (value < current.value) current = current.left!;
      else current = current.right!;
    }

    newNode.parent = parent;
    if (value < parent!.value) {
      parent!.left = newNode;
    } else {
      parent!.right = newNode;
    }

    this.fixInsert(newNode);
  }

  // Fix violations after insertion
  private fixInsert(z: Node<T>) {
    while (z.parent && z.parent.color === Color.RED) {
      let parent = z.parent;
      let grandparent = parent.parent;

      if (!grandparent) break; // No grandparent means parent is root

      if (parent === grandparent.left) {
        let uncle = grandparent.right;
        if (uncle && uncle.color === Color.RED) {
          // Case 1: Uncle red
          parent.color = Color.BLACK;
          uncle.color = Color.BLACK;
          grandparent.color = Color.RED;
          z = grandparent;
        } else {
          if (z === parent.right) {
            z = parent;
            this.rotateLeft(z);
          }
          // Case 3
          parent.color = Color.BLACK;
          grandparent.color = Color.RED;
          this.rotateRight(grandparent);
        }
      } else {
        // Mirror cases
        let uncle = grandparent.left;
        if (uncle && uncle.color === Color.RED) {
          parent.color = Color.BLACK;
          uncle.color = Color.BLACK;
          grandparent.color = Color.RED;
          z = grandparent;
        } else {
          if (z === parent.left) {
            z = parent;
            this.rotateRight(z);
          }
          parent.color = Color.BLACK;
          grandparent.color = Color.RED;
          this.rotateLeft(grandparent);
        }
      }
    }
    if(this.root) this.root.color = Color.BLACK;
  }

  // Optional: your lookup, deletion, traversal, etc.
}
const rbt = new RedBlackTree<number>();
rbt.insert(10);
rbt.insert(20);
rbt.insert(15);
