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

  // Insert method for a Binary Search Tree (BST)
  insert(value: T) {
    const newNode = new TreeNode(value);

    if (this.root === null) {
      this.root = newNode;
      return;
    }

    let current = this.root;
    while (true) {
      // For simplicity let's assume T supports < and > operators (e.g. number, string)
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

  // Search method for BST
  search(value: T): boolean {
    let current = this.root;
    while (current !== null) {
      if (value === current.value) return true;
      if (value < current.value) current = current.left;
      else current = current.right;
    }
    return false;
  }

  // In-order traversal (Left, Root, Right)
  inorderTraversal(node: TreeNode<T> | null = this.root, callback: (value: T) => void) {
    if (!node) return;
    this.inorderTraversal(node.left, callback);
    callback(node.value);
    this.inorderTraversal(node.right, callback);
  }
}
const tree = new BinaryTree<number>();
tree.insert(10);
tree.insert(5);
tree.insert(15);
tree.insert(7);

console.log(tree.search(7));  // true
console.log(tree.search(2));  // false

tree.inorderTraversal(tree.root, (value) => console.log(value)); 
// Output: 5, 7, 10, 15
