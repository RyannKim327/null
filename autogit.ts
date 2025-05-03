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

  // Comparator determines the order of values
  private compare: (a: T, b: T) => number;

  constructor(compareFn?: (a: T, b: T) => number) {
    // Default comparator assumes T is number or string
    this.compare = compareFn || ((a, b) => (a > b ? 1 : a < b ? -1 : 0));
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
          break;
        }
        current = current.left;
      } else {
        // Go right (duplicates will go to the right)
        if (!current.right) {
          current.right = newNode;
          break;
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

  // In-order traversal: left, node, right
  inorderTraversal(callback: (value: T) => void): void {
    function traverse(node: TreeNode<T> | null) {
      if (!node) return;
      traverse(node.left);
      callback(node.value);
      traverse(node.right);
    }
    traverse(this.root);
  }
}

// Example usage:

const bst = new BinarySearchTree<number>();
bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(7);

console.log("Search 7:", bst.search(7)); // true
console.log("Search 8:", bst.search(8)); // false

console.log("In-order traversal:");
bst.inorderTraversal((value) => console.log(value));
// Output will be in ascending order: 5, 7, 10, 15
