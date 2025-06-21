enum Color {
  RED = "RED",
  BLACK = "BLACK",
}

class RBTreeNode<T> {
  value: T;
  color: Color;
  left: RBTreeNode<T> | null;
  right: RBTreeNode<T> | null;
  parent: RBTreeNode<T> | null;

  constructor(value: T, color: Color = Color.RED) {
    this.value = value;
    this.color = color;
    this.left = null;
    this.right = null;
    this.parent = null;
  }
}

class RedBlackTree<T> {
  root: RBTreeNode<T> | null;

  constructor() {
    this.root = null;
  }

  // Insert a new value into the tree
  insert(value: T): void {
    const newNode = new RBTreeNode(value);
    this.insertNode(newNode);
    this.fixInsert(newNode);
  }

  private insertNode(node: RBTreeNode<T>): void {
    let current = this.root;
    let parent: RBTreeNode<T> | null = null;

    while (current !== null) {
      parent = current;
      if (node.value < current.value) {
        current = current.left;
      } else {
        current = current.right;
      }
    }

    node.parent = parent;

    if (parent === null) {
      this.root = node; // Tree was empty
    } else if (node.value < parent.value) {
      parent.left = node;
    } else {
      parent.right = node;
    }
  }

  private fixInsert(node: RBTreeNode<T>): void {
    while (node.parent?.color === Color.RED) {
      const parent = node.parent;
      const grandParent = parent.parent;

      if (!grandParent) break; // Root is reached

      const isParentLeftChild = grandParent.left === parent;

      const uncle = isParentLeftChild ? grandParent.right : grandParent.left;

      if (uncle && uncle.color === Color.RED) {
        // Case 1: Uncle is red -> Recolor
        parent.color = Color.BLACK;
        uncle.color = Color.BLACK;
        grandParent.color = Color.RED;
        node = grandParent;
      } else {
        // Case 2: Uncle is black or null
        if (isParentLeftChild && node === parent.right) {
          // Left-right case -> Rotate left
          this.rotateLeft(parent);
          node = parent;
        } else if (!isParentLeftChild && node === parent.left) {
          // Right-left case -> Rotate right
          this.rotateRight(parent);
          node = parent;
        }

        // Case 3: Perform final rotation
        if (isParentLeftChild) {
          this.rotateRight(grandParent);
        } else {
          this.rotateLeft(grandParent);
        }

        parent.color = Color.BLACK;
        grandParent.color = Color.RED;
      }
    }

    this.root!.color = Color.BLACK; // Ensure root is always black
  }

  private rotateLeft(node: RBTreeNode<T>): void {
    const rightChild = node.right;
    if (!rightChild) return;

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

  private rotateRight(node: RBTreeNode<T>): void {
    const leftChild = node.left;
    if (!leftChild) return;

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

  // In-order traversal (for debugging)
  inOrderTraversal(): T[] {
    const result: T[] = [];
    this.inOrder(this.root, result);
    return result;
  }

  private inOrder(node: RBTreeNode<T> | null, result: T[]): void {
    if (node !== null) {
      this.inOrder(node.left, result);
      result.push(node.value);
      this.inOrder(node.right, result);
    }
  }
}

// Example Usage
const rbTree = new RedBlackTree<number>();
rbTree.insert(10);
rbTree.insert(20);
rbTree.insert(30);
rbTree.insert(15);

console.log(rbTree.inOrderTraversal()); // [10, 15, 20, 30]
