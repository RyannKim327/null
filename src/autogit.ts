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
  private root: RBTreeNode<T> | null;

  constructor() {
    this.root = null;
  }

  // Insert a new value into the tree
  insert(value: T): void {
    const newNode = new RBTreeNode(value);

    if (!this.root) {
      this.root = newNode;
      this.root.color = Color.BLACK; // Root must always be black
      return;
    }

    let current = this.root;
    let parent: RBTreeNode<T> | null = null;

    // Traverse the tree to find the correct position
    while (current) {
      parent = current;
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        // Duplicate values are not allowed
        return;
      }
    }

    // Insert the new node
    newNode.parent = parent;
    if (parent) {
      if (value < parent.value) {
        parent.left = newNode;
      } else {
        parent.right = newNode;
      }
    }

    // Fix any violations of Red-Black Tree properties
    this.fixInsert(newNode);
  }

  // Balance the tree after insertion
  private fixInsert(node: RBTreeNode<T>): void {
    while (node.parent && node.parent.color === Color.RED) {
      const parent = node.parent;
      const grandParent = parent.parent;

      if (!grandParent) break;

      // Case 1: Parent is the left child of the grandparent
      if (parent === grandParent.left) {
        const uncle = grandParent.right;

        // Case 1.1: Uncle is red
        if (uncle && uncle.color === Color.RED) {
          parent.color = Color.BLACK;
          uncle.color = Color.BLACK;
          grandParent.color = Color.RED;
          node = grandParent;
        } else {
          // Case 1.2: Node is a right child (left-right case)
          if (node === parent.right) {
            this.rotateLeft(parent);
            node = parent;
            parent = node.parent!;
          }

          // Case 1.3: Node is a left child (left-left case)
          parent.color = Color.BLACK;
          grandParent.color = Color.RED;
          this.rotateRight(grandParent);
        }
      } else {
        // Case 2: Parent is the right child of the grandparent
        const uncle = grandParent.left;

        // Case 2.1: Uncle is red
        if (uncle && uncle.color === Color.RED) {
          parent.color = Color.BLACK;
          uncle.color = Color.BLACK;
          grandParent.color = Color.RED;
          node = grandParent;
        } else {
          // Case 2.2: Node is a left child (right-left case)
          if (node === parent.left) {
            this.rotateRight(parent);
            node = parent;
            parent = node.parent!;
          }

          // Case 2.3: Node is a right child (right-right case)
          parent.color = Color.BLACK;
          grandParent.color = Color.RED;
          this.rotateLeft(grandParent);
        }
      }
    }

    // Ensure the root is black
    if (this.root) {
      this.root.color = Color.BLACK;
    }
  }

  // Rotate left at the given node
  private rotateLeft(node: RBTreeNode<T>): void {
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

  // Rotate right at the given node
  private rotateRight(node: RBTreeNode<T>): void {
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

  // In-order traversal to print the tree
  inOrderTraversal(): void {
    const result: T[] = [];
    this.inOrder(this.root, result);
    console.log(result.join(" -> "));
  }

  private inOrder(node: RBTreeNode<T> | null, result: T[]): void {
    if (node) {
      this.inOrder(node.left, result);
      result.push(node.value);
      this.inOrder(node.right, result);
    }
  }
}
const rbTree = new RedBlackTree<number>();
rbTree.insert(10);
rbTree.insert(20);
rbTree.insert(30);
rbTree.insert(15);
rbTree.insert(25);
rbTree.insert(5);

console.log("In-order Traversal:");
rbTree.inOrderTraversal();
5 -> 10 -> 15 -> 20 -> 25 -> 30
