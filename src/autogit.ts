class TreeNode<T> {
  value: T;
  left: TreeNode<T> | null;
  right: TreeNode<T> | null;

  constructor(value: T) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree<T> {
  root: TreeNode<T> | null;

  constructor() {
    this.root = null;
  }

  insert(value: T): void {
    const newNode = new TreeNode(value);

    if (this.root === null) {
      this.root = newNode;
      return;
    }

    let current = this.root;
    while (true) {
      // Assuming T is comparable with < and > operators
      // For generic T, you might need a comparator function

      if (value < current.value) {
        if (current.left === null) {
          current.left = newNode;
          break;
        }
        current = current.left;
      } else {
        if (current.right === null) {
          current.right = newNode;
          break;
        }
        current = current.right;
      }
    }
  }

  // In-order traversal: left, root, right
  inOrderTraversal(node: TreeNode<T> | null = this.root, visit: (value: T) => void = console.log): void {
    if (node !== null) {
      this.inOrderTraversal(node.left, visit);
      visit(node.value);
      this.inOrderTraversal(node.right, visit);
    }
  }

  // Pre-order traversal: root, left, right
  preOrderTraversal(node: TreeNode<T> | null = this.root, visit: (value: T) => void = console.log): void {
    if (node !== null) {
      visit(node.value);
      this.preOrderTraversal(node.left, visit);
      this.preOrderTraversal(node.right, visit);
    }
  }

  // Post-order traversal: left, right, root
  postOrderTraversal(node: TreeNode<T> | null = this.root, visit: (value: T) => void = console.log): void {
    if (node !== null) {
      this.postOrderTraversal(node.left, visit);
      this.postOrderTraversal(node.right, visit);
      visit(node.value);
    }
  }
}

// Example usage:
const tree = new BinaryTree<number>();
tree.insert(10);
tree.insert(5);
tree.insert(15);
tree.insert(7);

// Prints the values in sorted order due to in-order traversal
tree.inOrderTraversal(tree.root, value => console.log(value));
