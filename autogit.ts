// Define a Node class representing each element in the BST
class TreeNode<T> {
  value: T;
  left: TreeNode<T> | null = null;
  right: TreeNode<T> | null = null;

  constructor(value: T) {
    this.value = value;
  }
}

// Binary Search Tree class
class BinarySearchTree<T> {
  root: TreeNode<T> | null = null;

  // Insert a value into the BST
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

  // Search for a value, return true if found
  contains(value: T): boolean {
    let current = this.root;

    while (current) {
      if (value === current.value) return true;
      current = value < current.value ? current.left : current.right;
    }

    return false;
  }

  // In-order traversal that returns sorted array of values
  inOrderTraversal(): T[] {
    const result: T[] = [];

    function traverse(node: TreeNode<T> | null) {
      if (!node) return;
      traverse(node.left);
      result.push(node.value);
      traverse(node.right);
    }

    traverse(this.root);
    return result;
  }
}
const bst = new BinarySearchTree<number>();
bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(7);

console.log(bst.contains(7));  // true
console.log(bst.contains(3));  // false

console.log(bst.inOrderTraversal());  // [5, 7, 10, 15]
