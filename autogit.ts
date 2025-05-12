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

  // Insert value into the BST
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
          break;
        }
        current = current.left;
      } else {
        // Go right
        if (!current.right) {
          current.right = newNode;
          break;
        }
        current = current.right;
      }
    }
  }

  // Search for a value in the BST
  contains(value: T): boolean {
    let current = this.root;

    while (current) {
      if (value === current.value) {
        return true;
      } else if (value < current.value) {
        current = current.left;
      } else {
        current = current.right;
      }
    }

    return false;
  }

  // Optional: In-order traversal to get sorted values
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

// Example usage:
const bst = new BinarySearchTree<number>();
bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(7);

console.log(bst.contains(7));  // true
console.log(bst.contains(3));  // false
console.log(bst.inOrderTraversal()); // [5, 7, 10, 15]
