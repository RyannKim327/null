// Define a node in the binary tree
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

// Define the binary tree class
class BinaryTree<T> {
  root: TreeNode<T> | null;

  constructor() {
    this.root = null;
  }

  // Insert a value into the tree (simple insertion for a binary search tree)
  insert(value: T): void {
    const newNode = new TreeNode(value);
    if (!this.root) {
      this.root = newNode;
      return;
    }
    this.insertNode(this.root, newNode);
  }

  private insertNode(current: TreeNode<T>, newNode: TreeNode<T>): void {
    if (newNode.value < current.value) {
      if (current.left === null) {
        current.left = newNode;
      } else {
        this.insertNode(current.left, newNode);
      }
    } else {
      if (current.right === null) {
        current.right = newNode;
      } else {
        this.insertNode(current.right, newNode);
      }
    }
  }

  // Example traversal: in-order
  inOrderTraversal(node: TreeNode<T> | null = this.root, callback: (value: T) => void): void {
    if (node !== null) {
      this.inOrderTraversal(node.left, callback);
      callback(node.value);
      this.inOrderTraversal(node.right, callback);
    }
  }
}
const tree = new BinaryTree<number>();
tree.insert(10);
tree.insert(5);
tree.insert(15);
tree.insert(7);

tree.inOrderTraversal(tree.root, (value) => console.log(value));
5
7
10
15
