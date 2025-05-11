// Define a generic node class
class TreeNode<T> {
  value: T;
  left: TreeNode<T> | null = null;
  right: TreeNode<T> | null = null;

  constructor(value: T) {
    this.value = value;
  }
}

// BinaryTree class with insert and traversal methods
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
      if (value < current.value) {
        // Go left
        if (!current.left) {
          current.left = newNode;
          return;
        }
        current = current.left;
      } else {
        // Go right (duplicates go to right here)
        if (!current.right) {
          current.right = newNode;
          return;
        }
        current = current.right;
      }
    }
  }

  // In-order traversal: left, root, right
  inorderTraversal(node: TreeNode<T> | null = this.root, result: T[] = []): T[] {
    if (node) {
      this.inorderTraversal(node.left, result);
      result.push(node.value);
      this.inorderTraversal(node.right, result);
    }
    return result;
  }

  // You can add other traversals similarly, like preorder and postorder
}
const tree = new BinaryTree<number>();
tree.insert(5);
tree.insert(3);
tree.insert(7);
tree.insert(2);
tree.insert(4);

console.log(tree.inorderTraversal()); // Output: [2, 3, 4, 5, 7]
