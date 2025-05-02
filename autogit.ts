enum Color {
  RED = "RED",
  BLACK = "BLACK"
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
  root: Node<T> | null = null;

  insert(value: T): void {
    // Insert normally like a BST, then fix coloring/structure
  }

  private rotateLeft(x: Node<T>): void {
    // Rotation logic here
  }

  private rotateRight(x: Node<T>): void {
    // Rotation logic here
  }

  private fixInsert(node: Node<T>): void {
    // Fix red-black properties after insertion
  }

  search(value: T): Node<T> | null {
    let current = this.root;
    while (current !== null) {
      if (value === current.value) return current;
      current = value < current.value ? current.left : current.right;
    }
    return null;
  }
}
private rotateLeft(x: Node<T>): void {
  const y = x.right;
  if (!y) return;

  x.right = y.left;
  if (y.left !== null) y.left.parent = x;

  y.parent = x.parent;
  if (x.parent === null) {
    this.root = y;
  } else if (x == x.parent.left) {
    x.parent.left = y;
  } else {
    x.parent.right = y;
  }

  y.left = x;
  x.parent = y;
}

private rotateRight(x: Node<T>): void {
  const y = x.left;
  if (!y) return;

  x.left = y.right;
  if (y.right !== null) y.right.parent = x;

  y.parent = x.parent;
  if (x.parent === null) {
    this.root = y;
  } else if (x == x.parent.right) {
    x.parent.right = y;
  } else {
    x.parent.left = y;
  }

  y.right = x;
  x.parent = y;
}
insert(value: T): void {
  let newNode = new Node<T>(value, Color.RED);
  if (this.root === null) {
    newNode.color = Color.BLACK;
    this.root = newNode;
    return;
  }

  let current = this.root;
  let parent: Node<T> | null = null;

  while (current !== null) {
    parent = current;
    if (value < current.value) {
      current = current.left;
    } else {
      current = current.right;
    }
  }

  newNode.parent = parent;
  if (parent) {
    if (value < parent.value) {
      parent.left = newNode;
    } else {
      parent.right = newNode;
    }
  }

  this.fixInsert(newNode);
}

private fixInsert(node: Node<T>): void {
  while (node !== this.root && node.parent?.color === Color.RED) {
    let parent = node.parent;
    let grandparent = parent.parent;

    if (!grandparent) break;

    if (parent === grandparent.left) {
      let uncle = grandparent.right;
      if (uncle && uncle.color === Color.RED) {
        // Case 1: recolor
        parent.color = Color.BLACK;
        uncle.color = Color.BLACK;
        grandparent.color = Color.RED;
        node = grandparent;
      } else {
        if (node === parent.right) {
          // Case 2: left-rotate parent
          node = parent;
          this.rotateLeft(node);
          parent = node.parent!;
        }
        // Case 3: right-rotate grandparent
        parent.color = Color.BLACK;
        grandparent.color = Color.RED;
        this.rotateRight(grandparent);
      }
    } else {
      // Mirror case: parent is right child of grandparent
      let uncle = grandparent.left;
      if (uncle && uncle.color === Color.RED) {
        // Case 1: recolor
        parent.color = Color.BLACK;
        uncle.color = Color.BLACK;
        grandparent.color = Color.RED;
        node = grandparent;
      } else {
        if (node === parent.left) {
          // Case 2: right-rotate parent
          node = parent;
          this.rotateRight(node);
          parent = node.parent!;
        }
        // Case 3: left-rotate grandparent
        parent.color = Color.BLACK;
        grandparent.color = Color.RED;
        this.rotateLeft(grandparent);
      }
    }
  }
  this.root!.color = Color.BLACK;
}
const tree = new RedBlackTree<number>();
tree.insert(10);
tree.insert(20);
tree.insert(30);
tree.insert(15);

console.log(tree.search(15)); // Node { value: 15, ... }
console.log(tree.search(99)); // null
