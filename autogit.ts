enum Color {
  Red,
  Black
}

class RBNode<T> {
  key: T;
  color: Color;
  left: RBNode<T> | null;
  right: RBNode<T> | null;
  parent: RBNode<T> | null;

  constructor(key: T, color: Color = Color.Red, parent: RBNode<T> | null = null) {
    this.key = key;
    this.color = color;
    this.left = null;
    this.right = null;
    this.parent = parent;
  }
}
class RedBlackTree<T> {
  root: RBNode<T> | null = null;

  // Insert, delete, rotate, and fix methods go here
}
insert(key: T): void {
  const newNode = new RBNode(key);
  if (!this.root) {
    this.root = newNode;
    this.root.color = Color.Black; // root is always black
    return;
  }

  // BST insert
  let current = this.root;
  let parent: RBNode<T> | null = null;
  while (current) {
    parent = current;
    if (key < current.key) {
      current = current.left;
    } else {
      current = current.right;
    }
  }

  newNode.parent = parent;
  if (parent) {
    if (key < parent.key) {
      parent.left = newNode;
    } else {
      parent.right = newNode;
    }
  }

  this.fixInsert(newNode);
}
private fixInsert(node: RBNode<T>): void {
  // Fixing up the tree after insert
  while (node !== this.root && node.parent?.color === Color.Red) {
    const parent = node.parent!;
    const grandparent = parent.parent!;
    const isLeftChild = parent === grandparent.left;

    const uncle = isLeftChild ? grandparent.right : grandparent.left;

    if (uncle && uncle.color === Color.Red) {
      // Case 1: Uncle is red - recolor
      parent.color = Color.Black;
      uncle.color = Color.Black;
      grandparent.color = Color.Red;
      node = grandparent;
    } else {
      // Cases 2 & 3: rotate
      if (isLeftChild && node === parent.right) {
        this.rotateLeft(parent);
        node = parent;
      } else if (!isLeftChild && node === parent.left) {
        this.rotateRight(parent);
        node = parent;
      }

      // Final rotation
      if (node === parent.left) {
        this.rotateRight(grandparent);
      } else {
        this.rotateLeft(grandparent);
      }
      parent.color = Color.Black;
      grandparent.color = Color.Red;
      break;
    }
  }
  this.root!.color = Color.Black;
}
private rotateLeft(node: RBNode<T>): void {
  const rightChild = node.right!;
  node.right = rightChild.left;
  if (rightChild.left) {
    rightChild.left.parent = node;
  }
  rightChild.parent = node.parent;
  if (!node.parent) {
    this.root = rightChild;
  } else if (node === node.parent.left) {
    node.parent.left = rightChild;
  } else {
    node.parent.right = rightChild;
  }
  rightChild.left = node;
  node.parent = rightChild;
}

private rotateRight(node: RBNode<T>): void {
  const leftChild = node.left!;
  node.left = leftChild.right;
  if (leftChild.right) {
    leftChild.right.parent = node;
  }
  leftChild.parent = node.parent;
  if (!node.parent) {
    this.root = leftChild;
  } else if (node === node.parent.right) {
    node.parent.right = leftChild;
  } else {
    node.parent.left = leftChild;
  }
  leftChild.right = node;
  node.parent = leftChild;
}
