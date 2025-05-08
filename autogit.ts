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
      if (value < current.value) current = current.left;
      else current = current.right;
    }
    return false;
  }

  // Example traversal method: in-order
  inOrderTraversal(node: TreeNode<T> | null = this.root, visit: (value: T) => void) {
    if (!node) return;
    this.inOrderTraversal(node.left, visit);
    visit(node.value);
    this.inOrderTraversal(node.right, visit);
  }
}
const tree = new BinaryTree<number>();
tree.insert(10);
tree.insert(5);
tree.insert(15);
tree.insert(7);

tree.inOrderTraversal(tree.root, (val) => console.log(val)); // 5, 7, 10, 15
console.log(tree.contains(7));  // true
console.log(tree.contains(20)); // false
