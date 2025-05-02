// Define a node class
class TreeNode<T> {
  value: T;
  left: TreeNode<T> | null = null;
  right: TreeNode<T> | null = null;

  constructor(value: T) {
    this.value = value;
  }
}

// Define the BST class
class BinarySearchTree<T> {
  root: TreeNode<T> | null = null;

  // A comparator function to allow custom ordering (optional)
  private compare: (a: T, b: T) => number;

  constructor(compareFn?: (a: T, b: T) => number) {
    this.compare = compareFn || ((a, b) => (a < b ? -1 : a > b ? 1 : 0));
  }

  // Insert a new value into the BST
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
        if (current.left === null) {
          current.left = newNode;
          break;
        }
        current = current.left;
      } else {
        // Go right
        if (current.right === null) {
          current.right = newNode;
          break;
        }
        current = current.right;
      }
    }
  }

  // Search for a value in the BST - returns true if found, false otherwise
  contains(value: T): boolean {
    let current = this.root;
    while (current) {
      const cmp = this.compare(value, current.value);
      if (cmp === 0) return true;
      current = cmp < 0 ? current.left : current.right;
    }
    return false;
  }

  // In-order traversal: left -> node -> right
  inOrderTraversal(callback: (value: T) => void): void {
    function traverse(node: TreeNode<T> | null) {
      if (!node) return;
      traverse(node.left);
      callback(node.value);
      traverse(node.right);
    }
    traverse(this.root);
  }
}
const bst = new BinarySearchTree<number>();

bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(8);

console.log(bst.contains(8)); // true
console.log(bst.contains(42)); // false

bst.inOrderTraversal((value) => console.log(value)); // 5 8 10 15
