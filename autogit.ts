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

  // Insert values into the binary tree (assuming a Binary Search Tree for ordered inserts)
  insert(value: T) {
    const newNode = new TreeNode(value);

    if (!this.root) {
      this.root = newNode;
      return;
    }

    let current = this.root;
    while (true) {
      if (value < current.value) {
        if (!current.left) {
          current.left = newNode;
          break;
        }
        current = current.left;
      } else {
        if (!current.right) {
          current.right = newNode;
          break;
        }
        current = current.right;
      }
    }
  }

  // Example traversal: In-order traversal (left, root, right)
  inorderTraversal(node: TreeNode<T> | null = this.root, visit: (value: T) => void) {
    if (!node) return;

    this.inorderTraversal(node.left, visit);
    visit(node.value);
    this.inorderTraversal(node.right, visit);
  }
}
const tree = new BinaryTree<number>();
tree.insert(8);
tree.insert(3);
tree.insert(10);
tree.insert(1);
tree.insert(6);

tree.inorderTraversal(tree.root, (value) => console.log(value));
// Output will be sorted order: 1, 3, 6, 8, 10
