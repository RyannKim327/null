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

  // Helper method to perform a left rotation
  private rotateLeft(node: RBTreeNode<T>): void {
    const rightChild = node.right!;
    node.right = rightChild.left;

    if (rightChild.left !== null) {
      rightChild.left.parent = node;
    }

    rightChild.parent = node.parent;

    if (node.parent === null) {
      this.root = rightChild;
    } else if (node === node.parent.left) {
      node.parent.left = rightChild;
    } else {
      node.parent.right = rightChild;
    }

    rightChild.left = node;
    node.parent = rightChild;
  }

  // Helper method to perform a right rotation
  private rotateRight(node: RBTreeNode<T>): void {
    const leftChild = node.left!;
    node.left = leftChild.right;

    if (leftChild.right !== null) {
      leftChild.right.parent = node;
    }

    leftChild.parent = node.parent;

    if (node.parent === null) {
      this.root = leftChild;
    } else if (node === node.parent.right) {
      node.parent.right = leftChild;
    } else {
      node.parent.left = leftChild;
    }

    leftChild.right = node;
    node.parent = leftChild;
  }

  // Insert a new value into the tree
  insert(value: T): void {
    const newNode = new RBTreeNode(value);

    // Standard BST insertion
    this.insertNode(this.root, newNode);

    // Fix any violations of Red-Black Tree properties
    this.fixInsert(newNode);
  }

  private insertNode(parent: RBTreeNode<T> | null, newNode: RBTreeNode<T>): void {
    if (parent === null) {
      this.root = newNode;
      return;
    }

    if (newNode.value < parent.value) {
      if (parent.left === null) {
        parent.left = newNode;
        newNode.parent = parent;
      } else {
        this.insertNode(parent.left, newNode);
      }
    } else {
      if (parent.right === null) {
        parent.right = newNode;
        newNode.parent = parent;
      } else {
        this.insertNode(parent.right, newNode);
      }
    }
  }

  private fixInsert(node: RBTreeNode<T>): void {
    while (node.parent?.color === Color.RED) {
      const parent = node.parent;
      const grandParent = parent.parent;

      if (parent === grandParent?.left) {
        const uncle = grandParent.right;

        // Case 1: Uncle is red
        if (uncle?.color === Color.RED) {
          parent.color = Color.BLACK;
          uncle.color = Color.BLACK;
          grandParent.color = Color.RED;
          node = grandParent;
        } else {
          // Case 2: Node is a right child
          if (node === parent.right) {
            node = parent;
            this.rotateLeft(node);
          }

          // Case 3: Node is a left child
          parent.color = Color.BLACK;
          grandParent!.color = Color.RED;
          this.rotateRight(grandParent!);
        }
      } else {
        const uncle = grandParent?.left;

        // Case 1: Uncle is red
        if (uncle?.color === Color.RED) {
          parent.color = Color.BLACK;
          uncle.color = Color.BLACK;
          grandParent!.color = Color.RED;
          node = grandParent!;
        } else {
          // Case 2: Node is a left child
          if (node === parent.left) {
            node = parent;
            this.rotateRight(node);
          }

          // Case 3: Node is a right child
          parent.color = Color.BLACK;
          grandParent!.color = Color.RED;
          this.rotateLeft(grandParent!);
        }
      }
    }

    this.root!.color = Color.BLACK;
  }

  // Search for a value in the tree
  search(value: T): RBTreeNode<T> | null {
    return this.searchNode(this.root, value);
  }

  private searchNode(node: RBTreeNode<T> | null, value: T): RBTreeNode<T> | null {
    if (node === null || node.value === value) {
      return node;
    }

    if (value < node.value) {
      return this.searchNode(node.left, value);
    } else {
      return this.searchNode(node.right, value);
    }
  }

  // Delete a value from the tree (not implemented here for brevity)
  delete(value: T): void {
    throw new Error("Delete operation not implemented");
  }
}
const rbTree = new RedBlackTree<number>();

rbTree.insert(10);
rbTree.insert(20);
rbTree.insert(30);
rbTree.insert(15);

console.log(rbTree.search(20)); // Should return the node with value 20
console.log(rbTree.search(25)); // Should return null
