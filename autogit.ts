class TreeNode<T> {
  value: T;
  left: TreeNode<T> | null = null;
  right: TreeNode<T> | null = null;

  constructor(value: T) {
    this.value = value;
  }
}

class BinarySearchTree<T> {
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

  contains(value: T): boolean {
    let current = this.root;
    while (current) {
      if (value === current.value) return true;
      current = value < current.value ? current.left : current.right;
    }
    return false;
  }

  // In-order traversal to print values in ascending order
  inOrderTraversal(node: TreeNode<T> | null = this.root, visit: (value: T) => void): void {
    if (!node) return;
    this.inOrderTraversal(node.left, visit);
    visit(node.value);
    this.inOrderTraversal(node.right, visit);
  }
}
const bst = new BinarySearchTree<number>();
bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(7);

console.log(bst.contains(7)); // true
console.log(bst.contains(3)); // false

bst.inOrderTraversal(bst.root, console.log); 
// Outputs: 5, 7, 10, 15
