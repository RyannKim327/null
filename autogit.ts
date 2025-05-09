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

  insert(value: T) {
    const newNode = new TreeNode(value);
    if (!this.root) {
      this.root = newNode;
      return;
    }
    this._insertNode(this.root, newNode);
  }

  private _insertNode(node: TreeNode<T>, newNode: TreeNode<T>) {
    // For simplicity, assuming binary search tree property:
    if (newNode.value < node.value) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this._insertNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this._insertNode(node.right, newNode);
      }
    }
  }

  // Example traversal - InOrder
  inOrderTraversal(node: TreeNode<T> | null = this.root, visit: (value: T) => void) {
    if (node !== null) {
      this.inOrderTraversal(node.left, visit);
      visit(node.value);
      this.inOrderTraversal(node.right, visit);
    }
  }
}
