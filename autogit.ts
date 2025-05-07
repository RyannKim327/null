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

  // Comparator function to handle generic types
  private compare: (a: T, b: T) => number;

  constructor(compareFn: (a: T, b: T) => number) {
    this.compare = compareFn;
  }

  insert(value: T): void {
    const newNode = new TreeNode(value);

    if (!this.root) {
      this.root = newNode;
      return;
    }

    let current = this.root;
    while (true) {
      if (this.compare(value, current.value) < 0) {
        // Go left
        if (!current.left) {
          current.left = newNode;
          return;
        }
        current = current.left;
      } else {
        // Go right
        if (!current.right) {
          current.right = newNode;
          return;
        }
        current = current.right;
      }
    }
  }

  search(value: T): boolean {
    let current = this.root;

    while (current) {
      const cmp = this.compare(value, current.value);
      if (cmp === 0) return true;
      current = cmp < 0 ? current.left : current.right;
    }

    return false;
  }

  inorderTraversal(callback: (value: T) => void): void {
    function inorder(node: TreeNode<T> | null) {
      if (!node) return;
      inorder(node.left);
      callback(node.value);
      inorder(node.right);
    }

    inorder(this.root);
  }
}
// For numbers, comparator is simple:
const bst = new BinarySearchTree<number>((a, b) => a - b);

bst.insert(10);
bst.insert(5);
bst.insert(20);
bst.insert(15);

console.log(bst.search(15)); // true
console.log(bst.search(25)); // false

bst.inorderTraversal((value) => console.log(value));
// Output will be: 5 10 15 20
