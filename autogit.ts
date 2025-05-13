// Define a node in the binary tree
class TreeNode<T> {
  value: T;
  left: TreeNode<T> | null = null;
  right: TreeNode<T> | null = null;

  constructor(value: T) {
    this.value = value;
  }
}

// Define the binary tree itself
class BinaryTree<T> {
  root: TreeNode<T> | null = null;

  // Insert value (assuming a Binary Search Tree for ordering)
  insert(value: T) {
    const newNode = new TreeNode(value);
    if (!this.root) {
      this.root = newNode;
      return;
    }
    this.insertNode(this.root, newNode);
  }

  private insertNode(node: TreeNode<T>, newNode: TreeNode<T>) {
    if (newNode.value < node.value) {
      if (!node.left) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      if (!node.right) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }

  // In-order traversal (left, root, right)
  inorderTraversal(node: TreeNode<T> | null = this.root, result: T[] = []): T[] {
    if (node) {
      this.inorderTraversal(node.left, result);
      result.push(node.value);
      this.inorderTraversal(node.right, result);
    }
    return result;
  }

  // Find a value in the tree
  find(value: T): boolean {
    return this.findNode(this.root, value);
  }

  private findNode(node: TreeNode<T> | null, value: T): boolean {
    if (!node) return false;
    if (value === node.value) return true;
    if (value < node.value) {
      return this.findNode(node.left, value);
    } else {
      return this.findNode(node.right, value);
    }
  }
}

// Example usage:
const tree = new BinaryTree<number>();
tree.insert(5);
tree.insert(3);
tree.insert(7);
tree.insert(1);

console.log(tree.inorderTraversal());  // Output: [1, 3, 5, 7]
console.log(tree.find(3));              // Output: true
console.log(tree.find(10));             // Output: false
