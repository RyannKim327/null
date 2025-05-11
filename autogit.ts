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

  constructor(value: T, color: Color = Color.RED) {
    this.value = value;
    this.color = color;
  }

  get isRed(): boolean {
    return this.color === Color.RED;
  }

  get isBlack(): boolean {
    return this.color === Color.BLACK;
  }
}
class RedBlackTree<T> {
  root: Node<T> | null = null;

  private leftRotate(x: Node<T>) {
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

  private rightRotate(y: Node<T>) {
    const x = y.left!;
    y.left = x.right;
    if (x.right) x.right.parent = y;
    x.parent = y.parent;

    if (!y.parent) {
      this.root = x;
    } else if (y === y.parent.left) {
      y.parent.left = x;
    } else {
      y.parent.right = x;
    }

    x.right = y;
    y.parent = x;
  }
  insert(value: T) {
    const newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
      this.root.color = Color.BLACK;
      return;
    }

    let current: Node<T> | null = this.root;
    let parent: Node<T> | null = null;

    while (current) {
      parent = current;
      if (value < current.value) {
        current = current.left;
      } else {
        current = current.right;
      }
    }

    newNode.parent = parent;
    if (value < parent!.value) {
      parent!.left = newNode;
    } else {
      parent!.right = newNode;
    }

    this.insertFixup(newNode);
  }

  private insertFixup(node: Node<T>) {
    while (node.parent && node.parent.color === Color.RED) {
      const parent = node.parent;
      const grandparent = parent.parent;

      if (!grandparent) break;

      if (parent === grandparent.left) {
        const uncle = grandparent.right;

        if (uncle && uncle.color === Color.RED) {
          // Case 1: Uncle is red - recolor
          parent.color = Color.BLACK;
          uncle.color = Color.BLACK;
          grandparent.color = Color.RED;
          node = grandparent;
        } else {
          // Case 2 & 3: Uncle black
          if (node === parent.right) {
            node = parent;
            this.leftRotate(node);
          }
          parent.color = Color.BLACK;
          grandparent.color = Color.RED;
          this.rightRotate(grandparent);
        }
      } else {
        // parent is the right child of grandparent
        const uncle = grandparent.left;

        if (uncle && uncle.color === Color.RED) {
          // Case 1 mirror
          parent.color = Color.BLACK;
          uncle.color = Color.BLACK;
          grandparent.color = Color.RED;
          node = grandparent;
        } else {
          if (node === parent.left) {
            node = parent;
            this.rightRotate(node);
          }
          parent.color = Color.BLACK;
          grandparent.color = Color.RED;
          this.leftRotate(grandparent);
        }
      }
    }
    this.root!.color = Color.BLACK;
  }
}
const tree = new RedBlackTree<number>();
tree.insert(10);
tree.insert(20);
tree.insert(30);
tree.insert(15);
