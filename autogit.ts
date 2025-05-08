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

  constructor(value: T) {
    this.value = value;
    this.color = Color.RED; // new nodes start red
  }
}

class RedBlackTree<T> {
  private root: Node<T> | null = null;

  private leftRotate(x: Node<T>) {
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

  private rightRotate(y: Node<T>) {
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

  insert(value: T) {
    let node = new Node(value);
    let y: Node<T> | null = null;
    let x = this.root;

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

    node.color = Color.RED;
    this.insertFixup(node);
  }

  private insertFixup(z: Node<T>) {
    let node = z;
    while (node.parent !== null && node.parent.color === Color.RED) {
      if (node.parent === node.parent.parent?.left) {
        const y = node.parent.parent.right;
        if (y !== null && y.color === Color.RED) {
          node.parent.color = Color.BLACK;
          y.color = Color.BLACK;
          node.parent.parent.color = Color.RED;
          node = node.parent.parent;
        } else {
          if (node === node.parent.right) {
            node = node.parent;
            this.leftRotate(node);
          }
          node.parent!.color = Color.BLACK;
          node.parent!.parent!.color = Color.RED;
          this.rightRotate(node.parent!.parent!);
        }
      } else {
        const y = node.parent.parent?.left;
        if (y !== null && y.color === Color.RED) {
          node.parent.color = Color.BLACK;
          y.color = Color.BLACK;
          node.parent.parent!.color = Color.RED;
          node = node.parent.parent!;
        } else {
          if (node === node.parent.left) {
            node = node.parent;
            this.rightRotate(node);
          }
          node.parent!.color = Color.BLACK;
          node.parent!.parent!.color = Color.RED;
          this.leftRotate(node.parent!.parent!);
        }
      }
    }
    this.root!.color = Color.BLACK;
  }

  // Utility function to do an in-order traversal (returns sorted values):
  inorder(): T[] {
    const res: T[] = [];

    function inorderHelper(node: Node<T> | null) {
      if (node !== null) {
        inorderHelper(node.left);
        res.push(node.value);
        inorderHelper(node.right);
      }
    }

    inorderHelper(this.root);
    return res;
  }
}
const tree = new RedBlackTree<number>();
tree.insert(10);
tree.insert(20);
tree.insert(30);
tree.insert(15);

console.log(tree.inorder()); // [10, 15, 20, 30]
