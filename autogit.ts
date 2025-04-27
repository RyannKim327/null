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
    if (!this.root) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  private insertNode(current: TreeNode<T>, newNode: TreeNode<T>): void {
    // For simplicity, assume we're building a binary search tree
    if (newNode.value < current.value) {
      if (current.left) {
        this.insertNode(current.left, newNode);
      } else {
        current.left = newNode;
      }
    } else {
      if (current.right) {
        this.insertNode(current.right, newNode);
      } else {
        current.right = newNode;
      }
    }
  }

  // In-order traversal (Left, Node, Right)
  inOrderTraversal(node: TreeNode<T> | null = this.root, visit: (value: T) => void): void {
    if (node !== null) {
      this.inOrderTraversal(node.left, visit);
      visit(node.value);
      this.inOrderTraversal(node.right, visit);
    }
  }
}
const tree = new BinaryTree<number>();
tree.insert(10);
tree.insert(5);
tree.insert(15);
tree.insert(7);

tree.inOrderTraversal(tree.root, (value) => {
  console.log(value);
});
