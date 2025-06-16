enum Color {
  RED,
  BLACK,
}

class Node<T> {
  key: T;
  color: Color;
  left: Node<T> | null;
  right: Node<T> | null;
  parent: Node<T> | null;

  constructor(key: T) {
    this.key = key;
    this.color = Color.RED; // New nodes are red by default
    this.left = null;
    this.right = null;
    this.parent = null;
  }
}

class RedBlackTree<T> {
  private root: Node<T> | null = null;

  // Left rotate at node x
  private leftRotate(x: Node<T>) {
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

  // Right rotate at node x
  private rightRotate(x: Node<T>) {
    const y = x.left!;
    x.left = y.right;
    if (y.right !== null) y.right.parent = x;

    y.parent = x.parent;
    if (x.parent === null) {
      this.root = y;
    } else if (x === x.parent.right) {
      x.parent.right = y;
    } else {
      x.parent.left = y;
    }

    y.right = x;
    x.parent = y;
  }

  // Insert key into the tree
  insert(key: T) {
    let node = new Node(key);

    let y: Node<T> | null = null;
    let x = this.root;

    while (x !== null) {
      y = x;
      if (node.key < x.key) {
        x = x.left;
      } else {
        x = x.right;
      }
    }

    node.parent = y;
    if (y === null) {
      this.root = node;
    } else if (node.key < y.key) {
      y.left = node;
    } else {
      y.right = node;
    }

    node.color = Color.RED;
    this.fixInsert(node);
  }

  // Fix red-black tree properties after insertion
  private fixInsert(k: Node<T>) {
    let node = k;

    while (node.parent !== null && node.parent.color === Color.RED) {
      if (node.parent === node.parent.parent!.left) {
        const uncle = node.parent.parent!.right;

        // Case 1: uncle is red
        if (uncle !== null && uncle.color === Color.RED) {
          node.parent.color = Color.BLACK;
          uncle.color = Color.BLACK;
          node.parent.parent!.color = Color.RED;
          node = node.parent.parent!;
        } else {
          // Case 2: node is right child
          if (node === node.parent.right) {
            node = node.parent;
            this.leftRotate(node);
          }
          // Case 3: node is left child
          node.parent!.color = Color.BLACK;
          node.parent!.parent!.color = Color.RED;
          this.rightRotate(node.parent!.parent!);
        }
      } else {
        // Mirror cases: parent is right child of grandparent
        const uncle = node.parent.parent!.left;

        if (uncle !== null && uncle.color === Color.RED) {
          node.parent.color = Color.BLACK;
          uncle.color = Color.BLACK;
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

  // Utility: inorder traversal (for testing)
  inorder(node: Node<T> | null = this.root): void {
    if (node !== null) {
      this.inorder(node.left);
      console.log(`${node.key} (${node.color === Color.RED ? 'R' : 'B'})`);
      this.inorder(node.right);
    }
  }
}
const tree = new RedBlackTree<number>();

tree.insert(10);
tree.insert(20);
tree.insert(30);
tree.insert(15);
tree.insert(25);

tree.inorder();
