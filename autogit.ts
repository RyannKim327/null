class TreeNode<T> {
  value: T;
  left: TreeNode<T> | null = null;
  right: TreeNode<T> | null = null;

  constructor(value: T) {
    this.value = value;
  }
}

class BinaryTree<T> {
  root: TreeNode<T> | null = null;

  insert(value: T): void {
    const newNode = new TreeNode(value);

    if (!this.root) {
      this.root = newNode;
      return;
    }

    let current = this.root;
    while (true) {
      // Assuming a binary search tree property for insertion
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

  // Example traversal: inorder
  inorderTraversal(node: TreeNode<T> | null = this.root, visit: (value: T) => void): void {
    if (!node) return;
    this.inorderTraversal(node.left, visit);
    visit(node.value);
    this.inorderTraversal(node.right, visit);
  }
}
const tree = new BinaryTree<number>();
tree.insert(10);
tree.insert(5);
tree.insert(15);
tree.insert(7);

tree.inorderTraversal(tree.root, value => console.log(value));
// Output:
// 5
// 7
// 10
// 15
