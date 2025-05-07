// Define the node of the BST
class TreeNode<T> {
  value: T;
  left: TreeNode<T> | null = null;
  right: TreeNode<T> | null = null;

  constructor(value: T) {
    this.value = value;
  }
}

// BST class
class BinarySearchTree<T> {
  root: TreeNode<T> | null = null;

  // Insert a value into the BST
  insert(value: T): void {
    const newNode = new TreeNode(value);

    if (this.root === null) {
      this.root = newNode;
      return;
    }

    let current = this.root;
    
    while (true) {
      if (value < current.value) {
        if (current.left === null) {
          current.left = newNode;
          return;
        }
        current = current.left;
      } else {
        if (current.right === null) {
          current.right = newNode;
          return;
        }
        current = current.right;
      }
    }
  }

  // Search for a value in the BST
  contains(value: T): boolean {
    let current = this.root;

    while (current !== null) {
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

  // In-order traversal to print the BST's values in sorted order
  inorderTraversal(node: TreeNode<T> | null = this.root, result: T[] = []): T[] {
    if (node !== null) {
      this.inorderTraversal(node.left, result);
      result.push(node.value);
      this.inorderTraversal(node.right, result);
    }
    return result;
  }
}

// Example usage:
const bst = new BinarySearchTree<number>();
bst.insert(7);
bst.insert(3);
bst.insert(9);
bst.insert(1);
bst.insert(5);

console.log(bst.contains(5));  // true
console.log(bst.contains(8));  // false

console.log(bst.inorderTraversal());  // [1, 3, 5, 7, 9]
